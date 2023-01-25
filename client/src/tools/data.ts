export const data = {
	_embedded: {
		terms: [
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000838",
				lang: "en",
				description: [
					"Retrograde bile flow. Reflux of bile can be from the duodenum to the stomach (duodenogastric reflux); to the esophagus (gastroesophageal reflux); or to the pancreas.",
					"Retrograde bile flow. Reflux of bile can be from the duodenum to the stomach (DUODENOGASTRIC REFLUX); to the esophagus (GASTROESOPHAGEAL REFLUX); or to the PANCREAS."
				],
				synonyms: ["Bile Reflux", "bile reflux"],
				annotation: {
					database_cross_reference: ["DOID:12237", "MONDO:0006677", "MeSH:D001655", "MESH:D001655", "UMLS:C0005403"],
					exactMatch: [
						"http://identifiers.org/mesh/D001655",
						"http://purl.obolibrary.org/obo/DOID_12237",
						"http://linkedlifedata.com/resource/umls/id/C0005403"
					],
					id: ["EFO:1000838"],
					"term editor": ["Dani Welter"]
				},
				label: "bile reflux",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000838",
				obo_id: "EFO:1000838",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"Retrograde bile flow. Reflux of bile can be from the duodenum to the stomach (duodenogastric reflux); to the esophagus (gastroesophageal reflux); or to the pancreas.",
						oboXrefs: [
							{
								database: "MESH",
								id: "D001655",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MONDO",
						id: "0006677",
						description: null,
						url: null
					},
					{
						database: "MeSH",
						id: "D001655",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001655"
					},
					{
						database: "DOID",
						id: "12237",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0005403",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MESH",
						id: "D001655",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "bile reflux",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000838/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_0009534",
				lang: "en",
				description: ["A disease involving the biliary tree."],
				synonyms: [
					"disease or disorder of biliary tree",
					"biliary tree disease or disorder",
					"biliary tree disease",
					"biliary tract disorder",
					"disorder of biliary tree",
					"disease of biliary tree"
				],
				annotation: {
					database_cross_reference: [
						"SCTID:105997008",
						"ICD10:K83",
						"MONDO:0004868",
						"MeSH:D001660",
						"ICD9:576.9",
						"ICD10:K83.9",
						"DOID:9741",
						"MedDRA:10004676",
						"MESH:D001660"
					],
					definition_citation: ["SCTID:105997008"],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_9741",
						"http://identifiers.org/mesh/D001660",
						"http://identifiers.org/snomedct/105997008"
					],
					gwas_trait: ["true"],
					id: ["EFO:0009534"]
				},
				label: "biliary tract disease",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_0009534",
				obo_id: "EFO:0009534",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "A disease involving the biliary tree.",
						oboXrefs: [
							{
								database: null,
								id: "https://orcid.org/0000-0002-6601-2165",
								description: null,
								url: "https://orcid.org/0000-0002-6601-2165"
							}
						]
					}
				],
				obo_xref: [
					{
						database: "ICD10",
						id: "K83.9",
						description: null,
						url: null
					},
					{
						database: "DOID",
						id: "9741",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MedDRA",
						id: "10004676",
						description: null,
						url: null
					},
					{
						database: "ICD9",
						id: "576.9",
						description: "DOID:9741",
						url: null
					},
					{
						database: "MONDO",
						id: "0004868",
						description: null,
						url: null
					},
					{
						database: "MESH",
						id: "D001660",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10",
						id: "K83",
						description: null,
						url: null
					},
					{
						database: "MeSH",
						id: "D001660",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001660"
					},
					{
						database: "SCTID",
						id: "105997008",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "biliary tree disease or disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							},
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disease of biliary tree",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "biliary tract disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "disorder of biliary tree",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "biliary tree disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0009534/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000839",
				lang: "en",
				description: [
					"A concretion in the urinary bladder.",
					"Stones in the URINARY BLADDER; also known as vesical calculi, bladder stones, or cystoliths."
				],
				synonyms: [
					"bladder calculus",
					"Urinary Bladder Calculi",
					"bladder stones",
					"vesical calculi",
					"cystoliths",
					"bladder stone"
				],
				annotation: {
					closeMatch: ["http://identifiers.org/meddra/10005001"],
					database_cross_reference: [
						"ICD9:594.1",
						"MESH:D001744",
						"DOID:11355",
						"SCTID:70650003",
						"SNOMEDCT:70650003",
						"NCIt:C26707",
						"MeSH:D001744",
						"MedDRA:10005001",
						"UMLS:C0005683",
						"MONDO:0006678"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_11355",
						"http://linkedlifedata.com/resource/umls/id/C0005683",
						"http://identifiers.org/snomedct/70650003",
						"http://identifiers.org/mesh/D001744"
					],
					gwas_trait: ["true"],
					id: ["EFO:1000839"],
					"term editor": ["Sirarat Sarntivijai"]
				},
				label: "bladder calculus",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000839",
				obo_id: "EFO:1000839",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "A concretion in the urinary bladder.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "P378",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "DOID",
						id: "11355",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MONDO",
						id: "0006678",
						description: null,
						url: null
					},
					{
						database: "ICD9",
						id: "594.1",
						description: "MONDO:relatedTo",
						url: null
					},
					{
						database: "MESH",
						id: "D001744",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIt",
						id: "C26707",
						description: null,
						url: null
					},
					{
						database: "SCTID",
						id: "70650003",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MedDRA",
						id: "10005001",
						description: "EFO:1000839",
						url: null
					},
					{
						database: "MeSH",
						id: "D001744",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001744"
					},
					{
						database: "SNOMEDCT",
						id: "70650003",
						description: null,
						url: null
					},
					{
						database: "UMLS",
						id: "C0005683",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "bladder calculus",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000839/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000018",
				lang: "en",
				description: ["A disease involving the urinary bladder.", "A disorder affecting the urinary bladder"],
				synonyms: [
					"urinary bladder disease",
					"disease or disorder of urinary bladder",
					"bladder disease",
					"urinary bladder disease or disorder",
					"disorder of urinary bladder",
					"urinary bladder disorder",
					"bladder disorder",
					"disease of urinary bladder"
				],
				annotation: {
					database_cross_reference: [
						"ICD9:596.9",
						"SCTID:42643001",
						"UMLS:C0005686",
						"MESH:D001745",
						"ICD10:N32",
						"NCIT:C2900",
						"NCIt:C2900",
						"ICD9:596.8",
						"MONDO:0006026",
						"DOID:365"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_365",
						"http://identifiers.org/snomedct/42643001",
						"http://identifiers.org/mesh/D001745",
						"http://purl.obolibrary.org/obo/NCIT_C2900",
						"http://linkedlifedata.com/resource/umls/id/C0005686"
					],
					gwas_trait: ["true"],
					id: ["EFO:1000018"],
					"term editor": ["Laura Huerta"]
				},
				label: "bladder disease",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_1000018",
				obo_id: "EFO:1000018",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "A disease involving the urinary bladder.",
						oboXrefs: [
							{
								database: null,
								id: "https://orcid.org/0000-0002-6601-2165",
								description: null,
								url: "https://orcid.org/0000-0002-6601-2165"
							}
						]
					}
				],
				obo_xref: [
					{
						database: "UMLS",
						id: "C0005686",
						description: "NCIT:C2900",
						url: null
					},
					{
						database: "ICD10",
						id: "N32",
						description: null,
						url: null
					},
					{
						database: "MESH",
						id: "D001745",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "596.8",
						description: "MONDO:relatedTo",
						url: null
					},
					{
						database: "SCTID",
						id: "42643001",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "596.9",
						description: "MONDO:i2s",
						url: null
					},
					{
						database: "DOID",
						id: "365",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIT",
						id: "C2900",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIt",
						id: "C2900",
						description: null,
						url: null
					},
					{
						database: "MONDO",
						id: "0006026",
						description: null,
						url: null
					}
				],
				obo_synonym: [
					{
						name: "urinary bladder disease or disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							},
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							}
						]
					},
					{
						name: "urinary bladder disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2900",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disorder of urinary bladder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "urinary bladder disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "urinary bladder disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "365",
								description: null,
								url: null
							},
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							}
						]
					},
					{
						name: "bladder disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2900",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disease of urinary bladder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "bladder disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2900",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/graph"
					},
					has_disease_location: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000018/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000784"
					}
				}
			},
			{
				iri: "http://purl.obolibrary.org/obo/MONDO_0004828",
				lang: "en",
				description: ["A urolithiasis that involves the lower urinary tract."],
				synonyms: ["urolithiasis of lower urinary tract", "lower urinary tract urolithiasis"],
				annotation: {
					database_cross_reference: [
						"ICD9:594.9",
						"DOID:9590",
						"SCTID:79509009",
						"ICD9:594",
						"UMLS:C0156264",
						"ICD9:594.8",
						"ICD10CM:N21",
						"ICD10CM:N21.9"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_9590",
						"http://purl.bioontology.org/ontology/ICD10CM/N21.9",
						"http://identifiers.org/snomedct/79509009",
						"http://linkedlifedata.com/resource/umls/id/C0156264"
					],
					id: ["MONDO:0004828"]
				},
				label: "lower urinary tract calculus",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: false,
				has_children: true,
				is_root: false,
				short_form: "MONDO_0004828",
				obo_id: "MONDO:0004828",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "A urolithiasis that involves the lower urinary tract.",
						oboXrefs: [
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "ICD9",
						id: "594.8",
						description: "MONDO:relatedTo",
						url: null
					},
					{
						database: "DOID",
						id: "9590",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0156264",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SCTID",
						id: "79509009",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "594",
						description: "DOID:9590",
						url: null
					},
					{
						database: "ICD10CM",
						id: "N21.9",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "594.9",
						description: "MONDO:i2s",
						url: null
					},
					{
						database: "ICD10CM",
						id: "N21",
						description: "MONDO:directSiblingOf",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "urolithiasis of lower urinary tract",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					},
					{
						name: "lower urinary tract urolithiasis",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							},
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004828/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000836",
				lang: "en",
				description: [
					"Conditions characterized by the presence of M protein (Monoclonal protein) in serum or urine without clinical manifestations of plasma cell dyscrasia."
				],
				synonyms: [
					"Monoclonal Gammopathy of Undetermined Significance",
					"BMH",
					"benign monoclonal gammopathy (disorder)",
					"benign Monoclonal Gammopathy"
				],
				annotation: {
					database_cross_reference: ["MeSH:D008998", "SNOMEDCT:58648008", "DOID:3404"],
					"term editor": ["Sirarat Sarntivijai"]
				},
				label: "benign monoclonal gammopathy",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000836",
				obo_id: "EFO:1000836",
				in_subset: null,
				obo_definition_citation: null,
				obo_xref: [
					{
						database: "MeSH",
						id: "D008998",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D008998"
					},
					{
						database: "DOID",
						id: "3404",
						description: null,
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "58648008",
						description: null,
						url: null
					}
				],
				obo_synonym: null,
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000836/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_0000203",
				lang: "en",
				description: [
					"A plasma cell disorder in which an abnormal amount of a single immunoglobulin is present in the serum. Up to 25% of cases of monoclonal gammopathy of undetermined significance (MGUS) progress to a B-cell malignancy or myeloma. MGUS may occur in conjunction with various carcinomas, chronic inflammatory and infectious conditions, and other diseases.",
					"A condition characterized by the abnormal presence of monoclonal immunoglobulins in the blood or urine."
				],
				synonyms: [
					"Monoclonal gammopathy of undetermined significance (morphologic abnormality)",
					"monoclonal gammopathy",
					"Paraproteinaemia",
					"Monoclonal Gammopathy Of Undetermined Significance (MGUS)",
					"Monoclonal gammopathy of uncertain significance",
					"Monoclonal gammopathy of undetermined significance",
					"MGUS - Monoclonal gammopathy of uncertain significance",
					"Monoclonal Gammopathy of Unknown Significance",
					"Paraproteinemia",
					"MGUS",
					"Monoclonal gammopathy of uncertain significance (disorder)",
					"Benign Monoclonal Gammopathy"
				],
				annotation: {
					database_cross_reference: [
						"MESH:D010265",
						"ICD10CM:D47.2",
						"MONDO:0004960",
						"NCIT:C35548",
						"SNOMEDCT:35601003",
						"SNOMEDCT:277577000",
						"DOID:7442",
						"NCIt:C35548",
						"SNOMEDCT:58648008",
						"MeSH:D008998",
						"SCTID:109983007",
						"MedDRA:10060880"
					],
					exactMatch: [
						"http://identifiers.org/mesh/D010265",
						"http://purl.obolibrary.org/obo/NCIT_C35548",
						"http://identifiers.org/snomedct/109983007",
						"http://purl.bioontology.org/ontology/ICD10CM/D47.2"
					],
					excluded_subClassOf: ["http://purl.obolibrary.org/obo/MONDO_0004959"],
					gwas_trait: ["true"],
					id: ["EFO:0000203"],
					"term editor": ["James Malone"]
				},
				label: "monoclonal gammopathy",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_0000203",
				obo_id: "EFO:0000203",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A condition characterized by the abnormal presence of monoclonal immunoglobulins in the blood or urine.",
						oboXrefs: [
							{
								database: null,
								id: "https://github.com/monarch-initiative/mondo/issues/227",
								description: null,
								url: "https://github.com/monarch-initiative/mondo/issues/227"
							},
							{
								database: "NCIT",
								id: "C35548",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "NCIT",
						id: "C35548",
						description: "MONDO:otherHierarchy",
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "277577000",
						description: null,
						url: null
					},
					{
						database: "MedDRA",
						id: "10060880",
						description: null,
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "35601003",
						description: null,
						url: null
					},
					{
						database: "SCTID",
						id: "109983007",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "7442",
						description: null,
						url: null
					},
					{
						database: "MONDO",
						id: "0004960",
						description: null,
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "58648008",
						description: null,
						url: null
					},
					{
						database: "MESH",
						id: "D010265",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10CM",
						id: "D47.2",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIt",
						id: "C35548",
						description: null,
						url: null
					},
					{
						database: "MeSH",
						id: "D008998",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D008998"
					}
				],
				obo_synonym: [
					{
						name: "monoclonal gammopathy",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000203/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000837",
				lang: "en",
				description: [
					"A disease caused by a deficiency of thiamine (vitamin B1) and characterized by polyneuritis, cardiac pathology, and edema. The epidemic form is found primarily in areas in which white (polished) rice is the staple food, as in Japan, China, the Philippines, India, and other countries of southeast Asia. (Dorland, 27th ed)",
					"Beriberi is a condition that occurs in people who are deficient in thiamine (vitamin B1). There are two major types of beriberi: wet beriberi which affects the cardiovascular system and dry beriberi which affects the nervous system. People with wet beriberi may experience increased heart rate, shortness of breath, and swelling of the lower legs. Signs and symptoms of dry beriberi include difficulty walking; loss of feeling in the hands and/or feet; paralysis of the lower legs; mental confusion; speech difficulty; pain; and/or vomiting. Beriberi is rare in the United States since many foods are now vitamin enriched; however, alcohol abuse, dialysis and taking high doses of diuretics increases the risk of developing the condition. In most cases,beriberi occurs sporadically in people with no family history of the condition. A rare condition known as genetic beriberi is inherited (passed down through families) and is associated with an inability to absorb thiamine from foods. Treatment generally includes thiamine supplementation, given by injection or taken by mouth."
				],
				synonyms: ["vitamin B1 deficiency", "Beriberi", "Beri Beri", "thiamine deficiency", "beriberi"],
				annotation: {
					closeMatch: ["http://identifiers.org/meddra/10004482"],
					comment: ["Editor note: check if beriberi should be made a subclass of TD"],
					database_cross_reference: [
						"MESH:D001602",
						"NCIT:C34418",
						"MedDRA:10004482",
						"ICD10:E51.1",
						"GARD:0009948",
						"MeSH:D001602",
						"ICD9:265.0",
						"DOID:13725",
						"MONDO:0006676",
						"SCTID:36656008",
						"SNOMEDCT:36656008",
						"UMLS:C0005122",
						"DOID:0070313"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_0070313",
						"http://linkedlifedata.com/resource/umls/id/C0005122",
						"http://purl.obolibrary.org/obo/DOID_13725",
						"http://purl.obolibrary.org/obo/NCIT_C34418",
						"http://identifiers.org/mesh/D001602",
						"http://identifiers.org/snomedct/36656008"
					],
					id: ["EFO:1000837"],
					"see also": ["https://rarediseases.info.nih.gov/diseases/9948/beriberi"],
					"term editor": ["Dani Welter"]
				},
				label: "beriberi",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000837",
				obo_id: "EFO:1000837",
				in_subset: ["gard_rare"],
				obo_definition_citation: [
					{
						definition:
							"Beriberi is a condition that occurs in people who are deficient in thiamine (vitamin B1). There are two major types of beriberi: wet beriberi which affects the cardiovascular system and dry beriberi which affects the nervous system. People with wet beriberi may experience increased heart rate, shortness of breath, and swelling of the lower legs. Signs and symptoms of dry beriberi include difficulty walking; loss of feeling in the hands and/or feet; paralysis of the lower legs; mental confusion; speech difficulty; pain; and/or vomiting. Beriberi is rare in the United States since many foods are now vitamin enriched; however, alcohol abuse, dialysis and taking high doses of diuretics increases the risk of developing the condition. In most cases,beriberi occurs sporadically in people with no family history of the condition. A rare condition known as genetic beriberi is inherited (passed down through families) and is associated with an inability to absorb thiamine from foods. Treatment generally includes thiamine supplementation, given by injection or taken by mouth.",
						oboXrefs: [
							{
								database: null,
								id: "https://rarediseases.info.nih.gov/diseases/9948/beriberi",
								description: null,
								url: "https://rarediseases.info.nih.gov/diseases/9948/beriberi"
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MeSH",
						id: "D001602",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001602"
					},
					{
						database: "MESH",
						id: "D001602",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MedDRA",
						id: "10004482",
						description: "EFO:1000837",
						url: null
					},
					{
						database: "GARD",
						id: "0009948",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "265.0",
						description: "MONDO:i2s",
						url: null
					},
					{
						database: "NCIT",
						id: "C34418",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0005122",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MONDO",
						id: "0006676",
						description: null,
						url: null
					},
					{
						database: "DOID",
						id: "13725",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "36656008",
						description: null,
						url: null
					},
					{
						database: "ICD10",
						id: "E51.1",
						description: null,
						url: null
					},
					{
						database: "SCTID",
						id: "36656008",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "0070313",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "vitamin B1 deficiency",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "GARD",
								id: "0009948",
								description: null,
								url: null
							}
						]
					},
					{
						name: "Beri Beri",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C34418",
								description: null,
								url: null
							}
						]
					},
					{
						name: "beriberi",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "thiamine deficiency",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "GARD",
								id: "0009948",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/graph"
					},
					disease_causes_feature: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000837/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252Fmondo%2523disease_causes_feature"
					}
				}
			},
			{
				iri: "http://purl.obolibrary.org/obo/MONDO_0042976",
				lang: "en",
				description: [
					"A condition due to deficiency in any member of the vitamin B complex. These B vitamins are water-soluble and must be obtained from the diet because they are easily lost in the urine. Unlike the lipid-soluble vitamins, they cannot be stored in the body fat."
				],
				synonyms: [],
				annotation: {
					database_cross_reference: ["UMLS:C0042850", "SCTID:47903000", "MESH:D014804", "NCIT:C35129"],
					exactMatch: [
						"http://purl.obolibrary.org/obo/NCIT_C35129",
						"http://linkedlifedata.com/resource/umls/id/C0042850",
						"http://identifiers.org/mesh/D014804",
						"http://identifiers.org/snomedct/47903000"
					],
					has_related_synonym: ["vitamin B deficiencies", "deficiencies, vitamin B", "deficiency, vitamin B"],
					id: ["MONDO:0042976"]
				},
				label: "vitamin B deficiency",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: false,
				has_children: true,
				is_root: false,
				short_form: "MONDO_0042976",
				obo_id: "MONDO:0042976",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A condition due to deficiency in any member of the vitamin B complex. These B vitamins are water-soluble and must be obtained from the diet because they are easily lost in the urine. Unlike the lipid-soluble vitamins, they cannot be stored in the body fat.",
						oboXrefs: [
							{
								database: "MESH",
								id: "D014804",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "NCIT",
						id: "C35129",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SCTID",
						id: "47903000",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0042850",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MESH",
						id: "D014804",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "deficiencies, vitamin B",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D014804",
								description: null,
								url: null
							}
						]
					},
					{
						name: "vitamin B deficiencies",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D014804",
								description: null,
								url: null
							}
						]
					},
					{
						name: "deficiency, vitamin B",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D014804",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0042976/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000834",
				lang: "en",
				description: [
					"An epithelial neoplasm of the anterior pituitary gland in which the neoplastic cells stain positive with basic dyes."
				],
				synonyms: [
					"basophilic adenoma",
					"pituitary gland basophil adenoma",
					"pituitary basophilic adenoma",
					"pituitary gland basophilic adenoma",
					"mucoid cell adenoma",
					"basophilic pituitary gland adenoma"
				],
				annotation: {
					closeMatch: ["http://identifiers.org/snomedct/9436005"],
					database_cross_reference: [
						"NCIT:C2856",
						"ICDO:8300/0",
						"EFO:1000834",
						"UMLS:C0001431",
						"MONDO:0006673",
						"MESH:D000237",
						"DOID:4542"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/NCIT_C2856",
						"http://linkedlifedata.com/resource/umls/id/C0001431",
						"http://purl.obolibrary.org/obo/DOID_4542",
						"http://identifiers.org/mesh/D000237"
					],
					has_related_synonym: ["basophil adenoma"],
					id: ["EFO:1000834"]
				},
				label: "basophil adenoma",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000834",
				obo_id: "EFO:1000834",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"An epithelial neoplasm of the anterior pituitary gland in which the neoplastic cells stain positive with basic dyes.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "P378",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "DOID",
						id: "4542",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIT",
						id: "C2856",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MESH",
						id: "D000237",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICDO",
						id: "8300/0",
						description: "NCIT:C2856",
						url: null
					},
					{
						database: "UMLS",
						id: "C0001431",
						description: "NCIT:C2856",
						url: null
					},
					{
						database: "MONDO",
						id: "0006673",
						description: null,
						url: null
					},
					{
						database: "EFO",
						id: "1000834",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "pituitary gland basophil adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "basophilic adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2856",
								description: null,
								url: null
							}
						]
					},
					{
						name: "mucoid cell adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2856",
								description: null,
								url: null
							}
						]
					},
					{
						name: "basophil adenoma",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "4542",
								description: null,
								url: null
							}
						]
					},
					{
						name: "pituitary basophilic adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2856",
								description: null,
								url: null
							}
						]
					},
					{
						name: "pituitary gland basophilic adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "4542",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C2856",
								description: null,
								url: null
							}
						]
					},
					{
						name: "basophilic pituitary gland adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C2856",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000834/graph"
					}
				}
			},
			{
				iri: "http://purl.obolibrary.org/obo/MONDO_0003641",
				lang: "en",
				description: [
					"A primary or metastatic neoplasm of hematopoietic origin that affects the brain, meninges, or spinal cord. Representative examples include Hodgkin and non-Hodgkin lymphomas, histiocytic tumors, and leukemias."
				],
				synonyms: [
					"central nervous system hematopoietic tumor",
					"central nervous system hematopoietic and lymphoid system neoplasm",
					"hematopoietic and lymphoid system neoplasm of central nervous system",
					"hematopoietic neoplasm of central nervous system",
					"hematopoietic neoplasm of CNS",
					"lymphomas and hemopoietic neoplasms of CNS",
					"hematopoietic tumor of central nervous system",
					"hematopoietic neoplasm of the central nervous system",
					"hematopoietic neoplasm of the CNS",
					"central nervous system hematopoietic neoplasm",
					"hematopoietic tumor of the central nervous system",
					"central nervous system hematopoietic neoplasms",
					"lymphomas and hemopoietic neoplasms of the CNS",
					"CNS hematopoietic tumor",
					"CNS hematopoietic neoplasm"
				],
				annotation: {
					database_cross_reference: ["DOID:5772", "NCIT:C5503", "UMLS:C1332882"],
					exactMatch: [
						"http://linkedlifedata.com/resource/umls/id/C1332882",
						"http://purl.obolibrary.org/obo/NCIT_C5503",
						"http://purl.obolibrary.org/obo/DOID_5772"
					],
					excluded_subClassOf: ["http://purl.obolibrary.org/obo/MONDO_0002714"],
					has_related_synonym: ["central nervous system hematologic cancer"],
					id: ["MONDO:0003641"]
				},
				label: "central nervous system hematopoietic neoplasm",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: false,
				has_children: true,
				is_root: false,
				short_form: "MONDO_0003641",
				obo_id: "MONDO:0003641",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A primary or metastatic neoplasm of hematopoietic origin that affects the brain, meninges, or spinal cord. Representative examples include Hodgkin and non-Hodgkin lymphomas, histiocytic tumors, and leukemias.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "NCIT",
						id: "C5503",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "5772",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C1332882",
						description: "NCIT:C5503",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "hematopoietic neoplasm of the central nervous system",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "CNS hematopoietic neoplasm",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "central nervous system hematopoietic neoplasms",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic neoplasm of central nervous system",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							},
							{
								database: "DOID",
								id: "5772",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic neoplasm of the CNS",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "central nervous system hematopoietic tumor",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "lymphomas and hemopoietic neoplasms of CNS",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "central nervous system hematopoietic neoplasm",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic tumor of central nervous system",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "lymphomas and hemopoietic neoplasms of the CNS",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "central nervous system hematologic cancer",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "5772",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic and lymphoid system neoplasm of central nervous system",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic neoplasm of CNS",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "hematopoietic tumor of the central nervous system",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					},
					{
						name: "central nervous system hematopoietic and lymphoid system neoplasm",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							}
						]
					},
					{
						name: "CNS hematopoietic tumor",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "5772",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C5503",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0003641/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000478",
				lang: "en",
				description: [
					"A non-metastasizing tumor that arises from the adenohypophysial cells of the anterior lobe of the pituitary gland. The tumor can be hormonally functioning or not. The diagnosis can be based on imaging studies and/or radioimmunoassays. Due to its location in the sella turcica, expansion of the tumor mass can impinge on the optic chiasm or involve the temporal lobe, third ventricle and posterior fossa A frequently associated physical finding is bitemporal hemianopsia which may progress to further visual loss."
				],
				synonyms: [
					"pituitary gland adenoma",
					"adenoma of pituitary",
					"pituitary adenoma",
					"adenoma of pituitary gland",
					"adenoma of the pituitary gland",
					"adenoma of the pituitary",
					"adenoma, anterior lobe pituitary gland, benign"
				],
				annotation: {
					closeMatch: ["http://identifiers.org/meddra/10035079"],
					conformsTo: ["http://purl.obolibrary.org/obo/mondo/patterns/adenoma.yaml"],
					database_cross_reference: [
						"ICD10:D35.2",
						"ICDO:8272/0",
						"UMLS:C0032000",
						"MedDRA:10035079",
						"OMIM:617540",
						"ICD10CM:D35.2",
						"NCIT:C3329",
						"ONCOTREE:PTAD",
						"SCTID:254956000",
						"MONDO:0006373",
						"OMIM:617686",
						"Orphanet:99408",
						"EFO:1000478",
						"DOID:3829"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/Orphanet_99408",
						"http://purl.obolibrary.org/obo/DOID_3829",
						"http://identifiers.org/snomedct/254956000",
						"http://purl.obolibrary.org/obo/NCIT_C3329",
						"http://linkedlifedata.com/resource/umls/id/C0032000"
					],
					excluded_subClassOf: ["http://purl.obolibrary.org/obo/MONDO_0000627"],
					gwas_trait: ["true"],
					has_related_synonym: ["PTAD"],
					id: ["EFO:1000478"]
				},
				label: "Pituitary Gland Adenoma",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_1000478",
				obo_id: "EFO:1000478",
				in_subset: ["disease_grouping", "ordo_group_of_disorders"],
				obo_definition_citation: [
					{
						definition:
							"A non-metastasizing tumor that arises from the adenohypophysial cells of the anterior lobe of the pituitary gland. The tumor can be hormonally functioning or not. The diagnosis can be based on imaging studies and/or radioimmunoassays. Due to its location in the sella turcica, expansion of the tumor mass can impinge on the optic chiasm or involve the temporal lobe, third ventricle and posterior fossa A frequently associated physical finding is bitemporal hemianopsia which may progress to further visual loss.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "ICDO",
						id: "8272/0",
						description: "NCIT:C3329",
						url: null
					},
					{
						database: "SCTID",
						id: "254956000",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0032000",
						description: "Orphanet:99408",
						url: null
					},
					{
						database: "MedDRA",
						id: "10035079",
						description: "Orphanet:99408/e",
						url: null
					},
					{
						database: "EFO",
						id: "1000478",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10CM",
						id: "D35.2",
						description: "Orphanet:99408/ntbt",
						url: null
					},
					{
						database: "MedDRA",
						id: "10035079",
						description: "Orphanet:99408",
						url: null
					},
					{
						database: "DOID",
						id: "3829",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ONCOTREE",
						id: "PTAD",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "Orphanet",
						id: "99408",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10",
						id: "D35.2",
						description: "Orphanet:99408",
						url: null
					},
					{
						database: "NCIT",
						id: "C3329",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "OMIM",
						id: "617540",
						description: null,
						url: "https://omim.org/entry/617540"
					},
					{
						database: "MONDO",
						id: "0006373",
						description: null,
						url: null
					},
					{
						database: "UMLS",
						id: "C0032000",
						description: "Orphanet:99408/e",
						url: null
					},
					{
						database: "OMIM",
						id: "617686",
						description: null,
						url: "https://omim.org/entry/617686"
					}
				],
				obo_synonym: [
					{
						name: "adenoma of the pituitary gland",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "3829",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "pituitary adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "0020471",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "adenoma of the pituitary",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "pituitary gland adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "adenoma of pituitary gland",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "adenoma, anterior lobe pituitary gland, benign",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "pituitary gland adenoma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "adenoma of pituitary",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3329",
								description: null,
								url: null
							}
						]
					},
					{
						name: "PTAD",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "ONCOTREE",
								id: "PTAD",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000478/graph"
					}
				}
			},
			{
				iri: "http://purl.obolibrary.org/obo/MONDO_0004805",
				lang: "en",
				description: ["A disease involving leukocytes."],
				synonyms: [
					"white blood cell disorder",
					"disorders, leukocyte",
					"leukocyte disease",
					"disorder of leukocyte",
					"leukocyte disorder",
					"disorder, leukocyte",
					"disease of leukocyte",
					"disease or disorder of leukocyte",
					"leukocyte disease or disorder"
				],
				annotation: {
					database_cross_reference: [
						"SCTID:54097007",
						"DOID:9500",
						"MESH:D007960",
						"ICD9:288.9",
						"ICD9:288",
						"UMLS:C0023510"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_9500",
						"http://identifiers.org/mesh/D007960",
						"http://identifiers.org/snomedct/54097007",
						"http://linkedlifedata.com/resource/umls/id/C0023510"
					],
					gwas_trait: ["true"],
					id: ["MONDO:0004805"]
				},
				label: "leukocyte disorder",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: false,
				has_children: true,
				is_root: false,
				short_form: "MONDO_0004805",
				obo_id: "MONDO:0004805",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "A disease involving leukocytes.",
						oboXrefs: [
							{
								database: null,
								id: "https://orcid.org/0000-0002-6601-2165",
								description: null,
								url: "https://orcid.org/0000-0002-6601-2165"
							}
						]
					}
				],
				obo_xref: [
					{
						database: "ICD9",
						id: "288.9",
						description: "DOID:9500",
						url: null
					},
					{
						database: "SCTID",
						id: "54097007",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "9500",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0023510",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "288",
						description: "DOID:9500",
						url: null
					},
					{
						database: "MESH",
						id: "D007960",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "leukocyte disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D007960",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disease of leukocyte",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "leukocyte disease or disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							},
							{
								database: "MONDO",
								id: "design_pattern",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disorder of leukocyte",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location_top",
								description: null,
								url: null
							}
						]
					},
					{
						name: "leukocyte disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/location",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disorders, leukocyte",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D007960",
								description: null,
								url: null
							}
						]
					},
					{
						name: "disorder, leukocyte",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D007960",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0004805/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000835",
				lang: "en",
				description: [
					"A rare neoplasm, usually benign, derived from mesenchymal fibroblasts located in the submesothelial lining of the PLEURA. It spite of its various synonyms, it has no features of mesothelial cells and is not related to malignant MESOTHELIOMA or asbestos exposure."
				],
				synonyms: [
					"localized benign fibrous mesothelioma",
					"fibrous mesothelioma, benign",
					"fibrous mesothelioma, benign (morphologic abnormality)",
					"benign fibrous mesothelioma"
				],
				annotation: {
					closeMatch: ["http://identifiers.org/snomedct/15702005"],
					comment: ["Editor note: consider merging into MONDO:0021041"],
					database_cross_reference: ["UMLS:C0334511", "DOID:2653", "MESH:D054363"],
					exactMatch: [
						"http://purl.obolibrary.org/obo/DOID_2653",
						"http://linkedlifedata.com/resource/umls/id/C0334511",
						"http://identifiers.org/mesh/D054363"
					],
					has_related_synonym: ["solitary fibrous tumor, pleural"]
				},
				label: "benign fibrous mesothelioma",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000835",
				obo_id: "EFO:1000835",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A rare neoplasm, usually benign, derived from mesenchymal fibroblasts located in the submesothelial lining of the PLEURA. It spite of its various synonyms, it has no features of mesothelial cells and is not related to malignant MESOTHELIOMA or asbestos exposure.",
						oboXrefs: [
							{
								database: "EFO",
								id: "1000835",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "DOID",
						id: "2653",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0334511",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MESH",
						id: "D054363",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "fibrous mesothelioma, benign",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "2653",
								description: null,
								url: null
							}
						]
					},
					{
						name: "benign fibrous mesothelioma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "localized benign fibrous mesothelioma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "2653",
								description: null,
								url: null
							},
							{
								database: "NCIT",
								id: "C4281",
								description: null,
								url: null
							},
							{
								database: "EFO",
								id: "1000835",
								description: null,
								url: null
							}
						]
					},
					{
						name: "solitary fibrous tumor, pleural",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "EFO",
								id: "1000835",
								description: null,
								url: null
							}
						]
					},
					{
						name: "fibrous mesothelioma, benign (morphologic abnormality)",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "2653",
								description: null,
								url: null
							},
							{
								database: "EFO",
								id: "1000835",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000835/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_0002422",
				lang: "en",
				description: [
					"A neoplasm which is characterized by the absence of morphologic features associated with malignancy (severe cytologic atypia, tumor cell necrosis, and high mitotic rate). Benign neoplasms remain confined to the original site of growth and do not metastasize to other anatomic sites."
				],
				synonyms: ["benign neoplasm", "neoplasm (disease), benign", "benign neoplasm (disease)"],
				annotation: {
					closeMatch: [
						"http://linkedlifedata.com/resource/umls/id/C0086692",
						"http://identifiers.org/snomedct/3898006"
					],
					comment: ["Editor note: see https://github.com/NCI-Thesaurus/thesaurus-obo-edition/issues/14"],
					conformsTo: ["http://purl.obolibrary.org/obo/mondo/patterns/benign.yaml"],
					database_cross_reference: [
						"ICD9:229.8",
						"EFO:0002422",
						"SCTID:20376005",
						"DOID:0060072",
						"ICD10WHO:D10-D36",
						"ICD9:229.9",
						"NCIT:C3677",
						"ICD10CM:D10-D36",
						"ICD10:D10.D36",
						"ICDO:8000/0",
						"DOID:0060085",
						"ICD9:210-229.99",
						"MONDO:0005165",
						"DOID:0060084"
					],
					exactMatch: [
						"https://icd.who.int/browse10/2019/en#/D10-D36",
						"http://purl.obolibrary.org/obo/DOID_0060084",
						"http://purl.bioontology.org/ontology/ICD10CM/D10-D36",
						"http://purl.obolibrary.org/obo/DOID_0060072",
						"http://purl.obolibrary.org/obo/NCIT_C3677",
						"http://purl.obolibrary.org/obo/DOID_0060085",
						"http://identifiers.org/snomedct/20376005"
					],
					gwas_trait: ["true"],
					has_related_synonym: [
						"benign unclassifiable tumor",
						"neoplasm, benign",
						"organ system benign neoplasm",
						"benign tumor",
						"cell type benign neoplasm"
					],
					id: ["EFO:0002422"]
				},
				label: "benign neoplasm",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_0002422",
				obo_id: "EFO:0002422",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A neoplasm which is characterized by the absence of morphologic features associated with malignancy (severe cytologic atypia, tumor cell necrosis, and high mitotic rate). Benign neoplasms remain confined to the original site of growth and do not metastasize to other anatomic sites.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "C3677",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "ICD10",
						id: "D10.D36",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "EFO",
						id: "0002422",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "210-229.99",
						description: "EFO:0002422",
						url: null
					},
					{
						database: "ICD9",
						id: "229.8",
						description: "i2s",
						url: null
					},
					{
						database: "ICD9",
						id: "229.9",
						description: "MONDO:i2s",
						url: null
					},
					{
						database: "DOID",
						id: "0060085",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10WHO",
						id: "D10-D36",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD9",
						id: "229.9",
						description: "i2s",
						url: null
					},
					{
						database: "ICD9",
						id: "229.8",
						description: "MONDO:i2s",
						url: null
					},
					{
						database: "MONDO",
						id: "0005165",
						description: null,
						url: null
					},
					{
						database: "DOID",
						id: "0060072",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10CM",
						id: "D10-D36",
						description: "https://orcid.org/0000-0002-4142-7153",
						url: null
					},
					{
						database: "ICDO",
						id: "8000/0",
						description: "NCIT:C3677",
						url: null
					},
					{
						database: "DOID",
						id: "0060084",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIT",
						id: "C3677",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SCTID",
						id: "20376005",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "benign neoplasm",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3677",
								description: null,
								url: null
							}
						]
					},
					{
						name: "organ system benign neoplasm",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "0060085",
								description: null,
								url: null
							}
						]
					},
					{
						name: "benign unclassifiable tumor",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3677",
								description: null,
								url: null
							}
						]
					},
					{
						name: "neoplasm, benign",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3677",
								description: null,
								url: null
							}
						]
					},
					{
						name: "benign neoplasm",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "benign tumor",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3677",
								description: null,
								url: null
							}
						]
					},
					{
						name: "cell type benign neoplasm",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "DOID",
								id: "0060084",
								description: null,
								url: null
							}
						]
					},
					{
						name: "neoplasm (disease), benign",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/benign",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0002422/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_0000588",
				lang: "en",
				description: [
					"A usually malignant and aggressive neoplasm of the mesothelium which is often associated with exposure to asbestos."
				],
				synonyms: ["mesothelioma"],
				annotation: {
					closeMatch: ["http://identifiers.org/snomedct/62064005"],
					database_cross_reference: [
						"OMIM:156240",
						"MONDO:0005065",
						"NCIT:C3234",
						"UMLS:C0025500",
						"ICD10:C45",
						"ICD10CM:C45",
						"EFO:0000588",
						"MESH:D008654"
					],
					exactMatch: [
						"http://purl.obolibrary.org/obo/NCIT_C3234",
						"http://linkedlifedata.com/resource/umls/id/C0025500",
						"http://identifiers.org/mesh/D008654",
						"http://purl.bioontology.org/ontology/ICD10CM/C45"
					],
					excluded_from_qc_check: ["http://purl.obolibrary.org/obo/mondo/sparql/qc/general/qc-single-child.sparql"],
					gwas_trait: ["true"],
					id: ["EFO:0000588"]
				},
				label: "mesothelioma",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_0000588",
				obo_id: "EFO:0000588",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"A usually malignant and aggressive neoplasm of the mesothelium which is often associated with exposure to asbestos.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "C3234",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MESH",
						id: "D008654",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "OMIM",
						id: "156240",
						description: null,
						url: "https://omim.org/entry/156240"
					},
					{
						database: "NCIT",
						id: "C3234",
						description: "MONDO:exact-label-match",
						url: null
					},
					{
						database: "UMLS",
						id: "C0025500",
						description: "NCIT:C3234",
						url: null
					},
					{
						database: "ICD10CM",
						id: "C45",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "ICD10",
						id: "C45",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MONDO",
						id: "0005065",
						description: null,
						url: null
					},
					{
						database: "NCIT",
						id: "C3234",
						description: "exact-label-match",
						url: null
					},
					{
						database: "EFO",
						id: "0000588",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "mesothelioma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "mesothelioma",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C3234",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_0000588/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000832",
				lang: "en",
				description: [
					"Infections with bacteria of the genus BACTEROIDES.",
					"Infections with bacteria of the genus bacteroides."
				],
				synonyms: [
					"Bacteroides Infections",
					"Bacteroides disease or disorder",
					"Bacteroides caused disease or disorder",
					"Bacteroides infectious disease",
					"infection due to Bacteroides"
				],
				annotation: {
					database_cross_reference: [
						"MESH:D001442",
						"ICD9:041.84",
						"SCTID:2918000",
						"DOID:4641",
						"MONDO:0006671",
						"MeSH:D001442",
						"UMLS:C0004669"
					],
					exactMatch: [
						"http://linkedlifedata.com/resource/umls/id/C0004669",
						"http://identifiers.org/mesh/D001442",
						"http://identifiers.org/snomedct/2918000"
					],
					has_related_synonym: [
						"Bacteroides infection",
						"infection caused by Bacteroides",
						"infection, Bacteroides",
						"infections, Bacteroides"
					],
					id: ["EFO:1000832"],
					"term editor": ["Sirarat Sarntivijai"]
				},
				label: "Bacteroides infectious disease",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: false,
				is_root: false,
				short_form: "EFO_1000832",
				obo_id: "EFO:1000832",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "Infections with bacteria of the genus bacteroides.",
						oboXrefs: [
							{
								database: "MESH",
								id: "D001442",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MONDO",
						id: "0006671",
						description: null,
						url: null
					},
					{
						database: "ICD9",
						id: "041.84",
						description: "MONDO:relatedTo",
						url: null
					},
					{
						database: "SCTID",
						id: "2918000",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "4641",
						description: null,
						url: null
					},
					{
						database: "MESH",
						id: "D001442",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MeSH",
						id: "D001442",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001442"
					},
					{
						database: "UMLS",
						id: "C0004669",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "Bacteroides infectious disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "Bacteroides infection",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D001442",
								description: null,
								url: null
							}
						]
					},
					{
						name: "infection, Bacteroides",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D001442",
								description: null,
								url: null
							}
						]
					},
					{
						name: "infections, Bacteroides",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D001442",
								description: null,
								url: null
							}
						]
					},
					{
						name: "Bacteroides caused disease or disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/specific_infectious_disease_by_agent",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/jstree"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000832/graph"
					}
				}
			},
			{
				iri: "http://purl.obolibrary.org/obo/MONDO_0024389",
				lang: "en",
				description: [],
				synonyms: [
					"anaerobic bacterial infection",
					"infection due to anaerobic bacteria",
					"infection caused by anaerobic bacteria"
				],
				annotation: {
					comment: ["Editor note: DP"],
					database_cross_reference: ["UMLS:C0854328", "ICD9:041.84", "SCTID:423451008"],
					exactMatch: [
						"http://identifiers.org/snomedct/423451008",
						"http://linkedlifedata.com/resource/umls/id/C0854328"
					],
					id: ["MONDO:0024389"]
				},
				label: "anaerobic bacteria infectious disease",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: false,
				has_children: true,
				is_root: false,
				short_form: "MONDO_0024389",
				obo_id: "MONDO:0024389",
				in_subset: null,
				obo_definition_citation: null,
				obo_xref: [
					{
						database: "ICD9",
						id: "041.84",
						description: "MONDO:relatedTo",
						url: null
					},
					{
						database: "UMLS",
						id: "C0854328",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SCTID",
						id: "423451008",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: null,
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FMONDO_0024389/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000872",
				lang: "en",
				description: ["Infections with bacteria of the family BACTEROIDACEAE."],
				synonyms: [
					"Bacteroidaceae caused disease or disorder",
					"Bacteroidaceae Infections",
					"Bacteroidaceae infectious disease",
					"Bacteroidaceae disease or disorder"
				],
				annotation: {
					database_cross_reference: ["DOID:4106", "UMLS:C0085392", "MESH:D016866", "MeSH:D016866", "MONDO:0006705"],
					exactMatch: ["http://linkedlifedata.com/resource/umls/id/C0085392", "http://identifiers.org/mesh/D016866"],
					has_related_synonym: ["infections, Bacteroidaceae", "infection, Bacteroidaceae", "Bacteroidaceae infection"],
					id: ["EFO:1000872"],
					"term editor": ["Sirarat Sarntivijai"]
				},
				label: "commensal Bacteroidaceae infectious disease",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_1000872",
				obo_id: "EFO:1000872",
				in_subset: null,
				obo_definition_citation: [
					{
						definition: "Infections with bacteria of the family BACTEROIDACEAE.",
						oboXrefs: [
							{
								database: "MESH",
								id: "D016866",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MeSH",
						id: "D016866",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D016866"
					},
					{
						database: "MONDO",
						id: "0006705",
						description: null,
						url: null
					},
					{
						database: "UMLS",
						id: "C0085392",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "4106",
						description: null,
						url: null
					},
					{
						database: "MESH",
						id: "D016866",
						description: "MONDO:equivalentTo",
						url: null
					}
				],
				obo_synonym: [
					{
						name: "Bacteroidaceae caused disease or disorder",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/specific_infectious_disease_by_agent",
								description: null,
								url: null
							}
						]
					},
					{
						name: "Bacteroidaceae infection",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D016866",
								description: null,
								url: null
							}
						]
					},
					{
						name: "Bacteroidaceae infectious disease",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "infection, Bacteroidaceae",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D016866",
								description: null,
								url: null
							}
						]
					},
					{
						name: "infections, Bacteroidaceae",
						scope: "hasRelatedSynonym",
						type: null,
						xrefs: [
							{
								database: "MESH",
								id: "D016866",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000872/graph"
					}
				}
			},
			{
				iri: "http://www.ebi.ac.uk/efo/EFO_1000833",
				lang: "en",
				description: [
					"Inflammation of the head of the PENIS, glans penis.",
					"An infectious or non-infectious inflammatory process that affects the glans penis. Symptoms include redness and pain of the glans penis and foreskin and discharge."
				],
				synonyms: [
					"Balanitis [Ambiguous]",
					"inflammation of glans penis",
					"glans penis inflammation",
					"Balanitis (disorder)",
					"balanitis",
					"Balanitis"
				],
				annotation: {
					closeMatch: ["http://identifiers.org/meddra/10004073"],
					database_cross_reference: [
						"NCIt:C26705",
						"MedDRA:10004073",
						"DOID:13033",
						"MeSH:D001446",
						"NCIT:C26705",
						"UMLS:C0004690",
						"MESH:D001446",
						"SNOMEDCT:44882003",
						"ICD10CM:N48.1",
						"MONDO:0006672",
						"ICD10WHO:N48.1",
						"SCTID:44882003"
					],
					exactMatch: [
						"http://linkedlifedata.com/resource/umls/id/C0004690",
						"http://identifiers.org/snomedct/44882003",
						"http://purl.obolibrary.org/obo/NCIT_C26705",
						"https://icd.who.int/browse10/2019/en#/N48.1",
						"http://identifiers.org/mesh/D001446",
						"http://purl.bioontology.org/ontology/ICD10CM/N48.1",
						"http://purl.obolibrary.org/obo/DOID_13033"
					],
					gwas_trait: ["true"],
					id: ["EFO:1000833"],
					"term editor": ["Dani Welter"]
				},
				label: "balanitis",
				ontology_name: "efo",
				ontology_prefix: "EFO",
				ontology_iri: "http://www.ebi.ac.uk/efo/efo.owl",
				is_obsolete: false,
				term_replaced_by: null,
				is_defining_ontology: true,
				has_children: true,
				is_root: false,
				short_form: "EFO_1000833",
				obo_id: "EFO:1000833",
				in_subset: null,
				obo_definition_citation: [
					{
						definition:
							"An infectious or non-infectious inflammatory process that affects the glans penis. Symptoms include redness and pain of the glans penis and foreskin and discharge.",
						oboXrefs: [
							{
								database: "NCIT",
								id: "C26705",
								description: null,
								url: null
							}
						]
					}
				],
				obo_xref: [
					{
						database: "MedDRA",
						id: "10004073",
						description: "EFO:1000833",
						url: null
					},
					{
						database: "ICD10WHO",
						id: "N48.1",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "DOID",
						id: "13033",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MONDO",
						id: "0006672",
						description: null,
						url: null
					},
					{
						database: "UMLS",
						id: "C0004690",
						description: "NCIT:C26705",
						url: null
					},
					{
						database: "NCIt",
						id: "C26705",
						description: null,
						url: null
					},
					{
						database: "SCTID",
						id: "44882003",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MeSH",
						id: "D001446",
						description: null,
						url: "http://id.nlm.nih.gov/mesh/D001446"
					},
					{
						database: "ICD10CM",
						id: "N48.1",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "NCIT",
						id: "C26705",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "MESH",
						id: "D001446",
						description: "MONDO:equivalentTo",
						url: null
					},
					{
						database: "SNOMEDCT",
						id: "44882003",
						description: null,
						url: null
					}
				],
				obo_synonym: [
					{
						name: "glans penis inflammation",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "MONDO",
								id: "patterns/inflammatory_disease_by_site",
								description: null,
								url: null
							}
						]
					},
					{
						name: "balanitis",
						scope: "hasExactSynonym",
						type: null,
						xrefs: []
					},
					{
						name: "balanitis",
						scope: "hasExactSynonym",
						type: null,
						xrefs: [
							{
								database: "NCIT",
								id: "C26705",
								description: null,
								url: null
							}
						]
					}
				],
				is_preferred_root: false,
				_links: {
					self: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833?lang=en"
					},
					parents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/parents"
					},
					ancestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/ancestors"
					},
					hierarchicalParents: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/hierarchicalParents"
					},
					hierarchicalAncestors: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/hierarchicalAncestors"
					},
					jstree: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/jstree"
					},
					children: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/children"
					},
					descendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/descendants"
					},
					hierarchicalChildren: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/hierarchicalChildren"
					},
					hierarchicalDescendants: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/hierarchicalDescendants"
					},
					graph: {
						href: "https://www.ebi.ac.uk/ols/api/ontologies/efo/terms/http%253A%252F%252Fwww.ebi.ac.uk%252Fefo%252FEFO_1000833/graph"
					}
				}
			}
		]
	},
	page: {
		size: 20,
		totalElements: 40134,
		totalPages: 2007,
		number: 0
	}
};
