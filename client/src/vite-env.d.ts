/// <reference types="vite/client" />

export interface efoT {
	iri: string;
	lang: string;
	description: string[];
	synonyms: string[];
	annotation: {
		database_cross_reference: string[];
		exactMatch: string[];
		id: string[];
		comment: string[];
		"see also": string;
		"term editor": string[];
	};
	label: string;
	ontology_name: string;
	ontology_prefix: string;
	ontology_iri: string;
	is_obsolete: boolean;
	term_replaced_by: null | string | boolean;
	is_defining_ontology: boolean;
	has_children: boolean;
	is_root: boolean;
	short_form: string;
	obo_id: string;
	in_subset: null | string | boolean;
	obo_definition_citation: {
		definition: string;
		oboXrefs: {
			database: string;
			id: string;
			description: null;
			url: null;
		}[];
	}[];
	obo_xref: {
		database: string | null;
		id: string | null;
		description: string | null;
		url: string | null;
	}[];
	obo_synonym: {
		name: string | null;
		scope: string | null;
		type: string | null;
		xrefs: never[];
	}[];
	is_preferred_root: boolean;
	_links: {
		self: {
			href: string;
		};
		parents: {
			href: string;
		};
		ancestors: {
			href: string;
		};
		hierarchicalParents: {
			href: string;
		};
		hierarchicalAncestors: {
			href: string;
		};
		jstree: {
			href: string;
		};
		children: {
			href: string;
		};
		descendants: {
			href: string;
		};
		hierarchicalChildren: {
			href: string;
		};
		hierarchicalDescendants: { href: string };
		graph: {
			href: string;
		};
	};
}
