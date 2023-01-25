from django.contrib import admin

from .models import Term


@admin.register(Term)
class TermAdmin(admin.ModelAdmin):
    list_display = (
        "obo_id",
        "iri",
        "label",
        "ontology_name",
        "ontology_prefix",
        "is_obsolete",
        "is_preferred_root",
        "ontology_iri",
    )
    search_fields = ("iri", "label", "ontology_name", "ontology_prefix")
    list_filter = (
        "is_root",
        "is_obsolete",
        "is_defining_ontology",
        "has_children",
        "is_preferred_root",
    )
