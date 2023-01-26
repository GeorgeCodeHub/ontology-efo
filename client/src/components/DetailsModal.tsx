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

	const { selectedLink } = useSelector((state: any) => state.terms);

	const dispatch = useDispatch();

	const { isLoading, data } = useQuery({
		queryKey: ["link", selectedLink, currentPage],
		enabled: selectedLink.label !== "",
		queryFn: () => getTermLinkData(selectedLink.url),
		staleTime: 10 * (60 * 1000),
		refetchOnWindowFocus: false
	});

	const onClose = useCallback(() => {
		dispatch(setSelectedLink({ label: "", url: "" }));
	}, [dispatch]);

	const handleTableChange = useCallback((pagination) => {
		setCurrentPage(pagination.current);
	}, []);

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
				<DataGraph dataSource={data?.data} isLoading={isLoading} />
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
