import { Button, Card, Space, Table, Tag } from "antd";

import { getStringBetween, onLabelClick } from "../tools/utils";

import { efoT } from "../vite-env";

type obo_xrefT = {
	database: string | null;
	id: string | null;
	description: string | null;
	url: string | null;
};

const { Column } = Table;

export function ExpandedRow(record: efoT) {
	const obo_xref = record.obo_xref.map((item, index) => ({ rowKey: index, ...item }));

	return (
		<div>
			<p>{record.description}</p>
			<div className="expanded-row-synonyms-container">
				<p className="expanded-row-synonyms-title">
					<b>Synonyms: </b>
				</p>{" "}
				<span className="expanded-row-synonyms">
					{record.synonyms.map((synonym) => (
						<Tag className="synonym-tag" color="cyan" key={synonym} title={synonym}>
							{synonym}
						</Tag>
					))}
				</span>
			</div>
			<div className="expanded-row-card-container">
				<Card
					style={{ width: "50%" }}
					title={`Annotation by ${record?.annotation["term editor"] ?? "unknown"}`}
					extra={<a href={record.annotation["see also"]}>See also</a>}
					size="small"
				>
					{record.annotation?.comment?.length && <p>Comment: {record.annotation?.comment.join(" ")}</p>}
					<Space>
						<ul style={{ overflow: "auto", height: 150 }}>
							{record.annotation.database_cross_reference.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<ul style={{ overflow: "auto", height: 150 }}>
							{record.annotation?.exactMatch?.map((item, index) => (
								<li key={index}>
									<a href={item} target="_blank">
										{getStringBetween(item, "http://", "")}
									</a>
								</li>
							))}
						</ul>
					</Space>
				</Card>
				<Card title={`OBO X reference`} size="small" style={{ width: "50%" }}>
					<Table
						className="expanded-row-card-table"
						dataSource={obo_xref}
						size="small"
						bordered={true}
						rowKey="rowKey"
						pagination={false}
						scroll={{ x: "100%", y: 150 }}
					>
						<Column
							title="ID"
							dataIndex="id"
							key="id"
							width={100}
							render={(_, record: obo_xrefT) =>
								record?.url ? (
									<Button
										className="label-container"
										type="link"
										title={record?.url}
										onClick={() => onLabelClick(record.url)}
									>
										{record.id}
									</Button>
								) : (
									record.id
								)
							}
						/>
						<Column title="Database" dataIndex="database" key="database" width={100} />
						<Column
							title="Description"
							dataIndex="description"
							key="description"
							width={150}
							render={(description: string) => (
								<span className="description-container" title={description}>
									{description}
								</span>
							)}
						/>
					</Table>
				</Card>
			</div>
		</div>
	);
}
