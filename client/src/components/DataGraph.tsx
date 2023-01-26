import { Spin } from "antd";
import React from "react";

import VisGraph from "react-vis-graph-wrapper";
import { colorPallette } from "../tools/consts";

const graph = {
	nodes: [
		{ id: 1, label: "Node 1", title: "node 1 tootip text" },
		{ id: 2, label: "Node 2", title: "node 2 tootip text" },
		{ id: 3, label: "Node 3", title: "node 3 tootip text" },
		{ id: 4, label: "Node 4", title: "node 4 tootip text" },
		{ id: 5, label: "Node 5", title: "node 5 tootip text" }
	],
	edges: [
		{ from: 1, to: 2 },
		{ from: 1, to: 3 },
		{ from: 2, to: 4 },
		{ from: 2, to: 5 }
	]
};

const options: any = {
	layout: {
		randomSeed: 1
	},
	nodes: {
		color: { border: colorPallette.colorPrimary, background: colorPallette.colorSecondary },
		shape: "box",
		font: {
			size: 12,
			face: "Helvetica"
		}
	},
	edges: {
		color: { inherit: true },
		width: 0.8,
		smooth: {
			type: "continuous"
		}
	},
	physics: false,
	height: "600px"
};

function DataGraph({ dataSource, isLoading }) {
	if (isLoading)
		return (
			<Spin tip="Loading..." size="large">
				<div style={{ height: 600 }}></div>
			</Spin>
		);

	dataSource.nodes = dataSource.nodes.map((node) => ({ id: node.iri, ...node }));
	dataSource.edges = dataSource.edges.map((edge) => ({ from: edge.source, to: edge.target, label: "", ...edge }));

	return <VisGraph graph={dataSource} options={options} />;
}

export default DataGraph;
