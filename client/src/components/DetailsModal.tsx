import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedLink } from "../redux/termsReducer";

import { useQuery } from "react-query";
import { getTermLinkData } from "../tools/apis";

import { Modal, message } from "antd";

import DataTable from "./DataTable";
import DataGraph from "./DataGraph";

function DetailsModal() {
	const [currentPage, setCurrentPage] = useState(1);

	const [messageApi, contextHolder] = message.useMessage();

	const { selectedLink } = useSelector((state: any) => state.terms);

	const dispatch = useDispatch();

	const { isLoading, data } = useQuery({
		queryKey: ["link", selectedLink, currentPage],
		enabled: selectedLink.label !== "",
		queryFn: () => getTermLinkData(selectedLink.url)
	});

	const onClose = useCallback(() => {
		dispatch(setSelectedLink({ label: "", url: "" }));
	}, [dispatch]);

	const handleTableChange = useCallback((pagination) => {
		setCurrentPage(pagination.current);
	}, []);

	useEffect(() => {
		if (isLoading) {
			messageApi.open({
				type: "loading",
				content: "Loading in progress..",
				duration: 0
			});
		} else {
			messageApi.destroy;
		}
	}, [messageApi, isLoading]);

	if (isLoading) return contextHolder;

	const dataSource = {
		terms: data?.data?._embedded?.terms,
		totalElements: data?.data?.page?.totalElements
	};

	return (
		<Modal
			title={selectedLink.label}
			centered
			open={selectedLink.label ? true : false}
			footer={null}
			onCancel={onClose}
			width="85%"
		>
			{selectedLink.label === "Graph" ? (
				<DataGraph dataSource={dataSource} />
			) : (
				<DataTable
					dataSource={dataSource.terms}
					totalCount={dataSource.totalElements}
					currentPage={currentPage}
					isLoading={isLoading}
					handleTableChange={handleTableChange}
					showLinks={false}
				/>
			)}
		</Modal>
	);
}

export default React.memo(DetailsModal);
