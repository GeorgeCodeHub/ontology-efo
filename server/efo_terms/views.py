from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework import status

from .tools.get_efo_data import get_efo_terms


from .models import Term, Synonym
from .serializers import TermSerializer


class Paginator(PageNumberPagination):
    page_size = 50
    max_page_size = 5000


class GetTerms(APIView):
    pagination_class = Paginator

    def get(self, request, format=None, *args, **kwargs):
        """
        List terms
        """

        # parameters with default values
        page_number = request.GET.get("page", 1)

        # Get EFO data
        loaded_terms = get_efo_terms(page_number=page_number)

        try:
            # Filter entries that already exist in the database
            filtered_terms = []
            for item in loaded_terms["_embedded"]["terms"]:
                try:
                    Term.objects.get(obo_id=item["obo_id"])
                except Term.DoesNotExist:
                    filtered_terms.append(item)

                    # Create new synonyms in database if they doesn't exist
                    Synonym.objects.bulk_create(
                        [Synonym(name=synonym) for synonym in item["synonyms"]],
                        ignore_conflicts=True,
                    )

            # Add new data in the database if they exist
            if filtered_terms:
                serializer = TermSerializer(data=filtered_terms, many=True)
                if serializer.is_valid():
                    serializer.save()
                else:
                    return Response(
                        serializer.errors, status=status.HTTP_400_BAD_REQUEST
                    )

            # Paginate the data
            final_terms = Term.objects.all().order_by("-obo_id")
            paginator = self.pagination_class()

            paginated_queryset = paginator.paginate_queryset(final_terms, request)

            # Return requested data
            serializer = TermSerializer(paginated_queryset, many=True)
            return Response(
                {
                    "results": serializer.data,
                    "count": loaded_terms["page"]["totalElements"],
                },
                status=status.HTTP_200_OK,
            )
        except:
            return Response(
                {
                    "results": [],
                    "count": 0,
                },
                status=status.HTTP_200_OK,
            )


class QuestionsAPIView(ListCreateAPIView):
    search_fields = ["obo_id", "label"]
    filter_backends = (filters.SearchFilter,)
    queryset = Term.objects.all().order_by("-obo_id")
    serializer_class = TermSerializer
