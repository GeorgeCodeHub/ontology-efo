from django.contrib.postgres.fields import ArrayField
from django.db import models


class Synonym(models.Model):
    name = models.CharField(max_length=255, primary_key=True)

    def __str__(self):
        return self.name


class Term(models.Model):
    iri = models.URLField()
    lang = models.CharField(max_length=255, null=True)
    description = ArrayField(models.TextField(), null=True, blank=True)
    synonyms = models.ManyToManyField(Synonym, related_name="synonyms", blank=True)
    annotation = models.JSONField(blank=True, null=True)
    label = models.CharField(max_length=255)
    ontology_name = models.CharField(max_length=255)
    ontology_prefix = models.CharField(max_length=255)
    ontology_iri = models.URLField(null=True)
    is_obsolete = models.BooleanField(null=True)
    term_replaced_by = models.CharField(max_length=255, null=True)
    is_defining_ontology = models.BooleanField(null=True)
    has_children = models.BooleanField(null=True)
    is_root = models.BooleanField(null=True)
    short_form = models.CharField(max_length=255, null=True)
    obo_id = models.CharField(max_length=255, unique=True, primary_key=True)
    in_subset = ArrayField(models.TextField(), null=True, blank=True)
    obo_definition_citation = models.JSONField(blank=True, null=True)
    obo_xref = models.JSONField(blank=True, null=True)
    obo_synonym = models.JSONField(blank=True, null=True)
    is_preferred_root = models.BooleanField(null=True)
    _links = models.JSONField(blank=True, null=True)

    class Meta:
        db_table = "terms"

    # define string representation for this model class, will be used when display model class data in django admin web site.
    def __str__(self):
        return self.obo_id
