# Generated by Django 4.1.5 on 2023-01-25 10:21

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Synonym",
            fields=[
                (
                    "name",
                    models.CharField(max_length=255, primary_key=True, serialize=False),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Term",
            fields=[
                ("iri", models.URLField()),
                ("lang", models.CharField(max_length=255, null=True)),
                (
                    "description",
                    django.contrib.postgres.fields.ArrayField(
                        base_field=models.TextField(), blank=True, null=True, size=None
                    ),
                ),
                ("annotation", models.JSONField(blank=True, null=True)),
                ("label", models.CharField(max_length=255)),
                ("ontology_name", models.CharField(max_length=255)),
                ("ontology_prefix", models.CharField(max_length=255)),
                ("ontology_iri", models.URLField(null=True)),
                ("is_obsolete", models.BooleanField(null=True)),
                ("term_replaced_by", models.CharField(max_length=255, null=True)),
                ("is_defining_ontology", models.BooleanField(null=True)),
                ("has_children", models.BooleanField(null=True)),
                ("is_root", models.BooleanField(null=True)),
                ("short_form", models.CharField(max_length=255, null=True)),
                (
                    "obo_id",
                    models.CharField(
                        max_length=255, primary_key=True, serialize=False, unique=True
                    ),
                ),
                (
                    "in_subset",
                    django.contrib.postgres.fields.ArrayField(
                        base_field=models.TextField(), blank=True, null=True, size=None
                    ),
                ),
                ("obo_definition_citation", models.JSONField(blank=True, null=True)),
                ("obo_xref", models.JSONField(blank=True, null=True)),
                ("obo_synonym", models.JSONField(blank=True, null=True)),
                ("is_preferred_root", models.BooleanField(null=True)),
                ("_links", models.JSONField(blank=True, null=True)),
                (
                    "synonyms",
                    models.ManyToManyField(
                        blank=True, related_name="synonyms", to="efo_terms.synonym"
                    ),
                ),
            ],
            options={
                "db_table": "terms",
            },
        ),
    ]
