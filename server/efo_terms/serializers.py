from rest_framework import serializers

from .models import Term, Synonym


class SynonymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Synonym
        fields = ["name"]


class TermSerializer(serializers.ModelSerializer):
    synonyms = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Synonym.objects.all(), allow_null=True
    )

    class Meta:
        model = Term
        fields = "__all__"
