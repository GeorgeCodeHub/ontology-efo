import { Button, Dropdown, Tag } from "antd";
import {
	CheckCircleOutlined,
	CheckOutlined,
	CloseCircleOutlined,
	CloseOutlined,
	DownOutlined
} from "@ant-design/icons";

import { colorPallette } from "../tools/consts";
import { onLabelClick } from "../tools/utils";

import { efoT } from "../vite-env";
import { setSelectedLink } from "../redux/termsReducer";

export const LabelRender = (_, record: efoT) => {
	return (
		<Button className="label-container" type="link" title={record?.label} onClick={() => onLabelClick(record?.iri)}>
			{record?.label}
		</Button>
	);
};

export const DescriptionRender = (description) => {
	return (
		<span className="description-container" title={description.join(", ")}>
			{description.join(", ")}
		</span>
	);
};

export const StatusRender = (_, record: efoT) => {
	return (
		<>
			<Tag
				className="synonym-tag"
				icon={record.is_root ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
				color={record.is_root ? "success" : "error"}
			>
				Is Root
			</Tag>
			<Tag
				className="synonym-tag"
				icon={record.is_preferred_root ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
				color={record.is_preferred_root ? "success" : "error"}
			>
				Is Preferred Root
			</Tag>
			<Tag
				className="synonym-tag"
				icon={record.is_obsolete ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
				color={record.is_obsolete ? "success" : "error"}
			>
				Obsolete
			</Tag>
			<Tag
				className="synonym-tag"
				icon={record.is_defining_ontology ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
				color={record.is_defining_ontology ? "success" : "error"}
			>
				Defining Ontology
			</Tag>
		</>
	);
};

const BooleanRender = (bool: boolean) => (
	<div style={{ textAlign: "center" }}>
		{bool ? (
			<CheckOutlined style={{ color: colorPallette.colorPrimary }} />
		) : (
			<CloseOutlined style={{ color: colorPallette.colorPrimary }} />
		)}
	</div>
);

export const TagRender = (synonyms) => {
	return (
		<>
			{synonyms.slice(0, 3).map((synonym) => (
				<Tag className="synonym-tag" color="cyan" key={synonym} title={synonym}>
					{synonym}
				</Tag>
			))}
			{synonyms.length > 4 ? <Tag className="synonym-tag">{synonyms.length - 4} More</Tag> : <></>}
		</>
	);
};

export const LinksRender = ({ dispatch, record }) => {
	const items = [
		{
			label: "Hierarchical Ancestors",
			key: JSON.stringify({ label: "Hierarchical Ancestors", url: record._links?.hierarchicalAncestors?.href }),
			disabled: !record._links?.hierarchicalAncestors?.href
		},
		{
			label: "Ancestors",
			key: JSON.stringify({ label: "Ancestors", url: record._links?.ancestors?.href }),
			disabled: !record._links?.ancestors?.href
		},
		{
			label: "Hierarchical Parents",
			key: JSON.stringify({ label: "Hierarchical Parents", url: record._links?.hierarchicalParents?.href }),
			disabled: !record._links?.hierarchicalParents?.href
		},
		{
			label: "Parents",
			key: JSON.stringify({ label: "Parents", url: record._links?.parents?.href }),
			disabled: !record._links?.parents?.href
		},
		{
			label: "Hierarchical Children",
			key: JSON.stringify({ label: "Hierarchical Children", url: record._links?.hierarchicalChildren?.href }),
			disabled: !record._links?.hierarchicalChildren?.href
		},
		{
			label: "Children",
			key: JSON.stringify({ label: "Children", url: record._links?.children?.href }),
			disabled: !record._links?.children?.href
		},
		{
			label: "Hierarchical Descendants",
			key: JSON.stringify({ label: "Hierarchical Descendants", url: record._links?.hierarchicalDescendants?.href }),
			disabled: !record._links?.hierarchicalDescendants?.href
		},
		{
			label: "Descendants",
			key: JSON.stringify({ label: "Descendants", url: record._links?.descendants?.href }),
			disabled: !record._links?.descendants?.href
		},
		{
			label: "Graph",
			key: JSON.stringify({ label: "Graph", url: record._links?.graph?.href }),
			disabled: !record._links?.graph?.href
		}
	];

	const onClick = ({ key }) => {
		dispatch(setSelectedLink(JSON.parse(key)));
	};

	return (
		<Dropdown menu={{ items, onClick }}>
			<Button type="link" onClick={(e) => e.preventDefault()}>
				More
				<DownOutlined />
			</Button>
		</Dropdown>
	);
};
