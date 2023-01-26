import React, { useState, useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";

import { Table } from "antd";

import { ExpandedRow as expandedRowRender } from "./ExpandedRow";
import { DescriptionRender, LabelRender, LinksRender, StatusRender, TagRender } from "./DataTableColumnsRender";

import { efoT } from "../vite-env";

import "../styles/DataTable.scss";

const { Column } = Table;

function DataTable({ dataSource, totalCount, currentPage, isLoading, handleTableChange, showLinks = true }) {
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		if (totalCount !== undefined) setData(dataSource);
		if (totalCount !== undefined) setTotal(totalCount);
	}, [totalCount, dataSource]);

	return (
		<Table
			dataSource={data}
			size="small"
			bordered={true}
			rowKey="obo_id"
			style={{ flex: 1 }}
			expandable={{ expandedRowRender }}
			loading={isLoading}
			pagination={{
				current: currentPage,
				pageSize: 50,
				showSizeChanger: false,
				total: total
			}}
			onChange={handleTableChange}
			scroll={{ x: "calc(100vw - 50rem)", y: "calc(100vh - 14rem)" }}
		>
			<Column title="ID" dataIndex="obo_id" key="obo_id" width={100} fixed="left" />
			<Column title="Label" dataIndex="label" key="label" width={160} render={LabelRender} />
			<Column title="Description" dataIndex="description" key="description" width={350} render={DescriptionRender} />
			<Column title="Language" dataIndex="lang" key="lang" width={80} />
			<Column title="Status" width={150} render={StatusRender} />
			<Column title="Synonyms" dataIndex="synonyms" key="synonyms" width={250} render={TagRender} />
			{showLinks && (
				<Column
					title="Links"
					width={120}
					render={(_, record: efoT) => <LinksRender dispatch={dispatch} record={record} />}
				/>
			)}
		</Table>
	);
}

export default React.memo(DataTable);
