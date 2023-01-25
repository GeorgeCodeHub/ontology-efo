from django.urls import path

from .views import GetTerms, QuestionsAPIView

urlpatterns = [
    path("get_terms", GetTerms.as_view(), name="terms"),
    path("search_terms", QuestionsAPIView.as_view(), name="terms"),
]
