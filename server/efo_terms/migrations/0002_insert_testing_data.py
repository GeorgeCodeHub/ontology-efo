# Generated by Django 4.1.5 on 2023-01-25 19:48
from django.db import migrations

from ..models import Synonym
from ..serializers import TermSerializer
from ..tools.get_efo_data import get_efo_terms


def insert_testing_data(self, schema_editor):

    data = get_efo_terms(page_number=9)
    for item in data["_embedded"]["terms"]:
        # Create new synonyms in database
        Synonym.objects.bulk_create(
            [Synonym(name=synonym) for synonym in item["synonyms"]],
            ignore_conflicts=True,
        )

    serializer = TermSerializer(data=data, many=True)
    if serializer.is_valid():
        serializer.save()


class Migration(migrations.Migration):

    dependencies = [
        ("efo_terms", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(insert_testing_data, migrations.RunPython),
    ]