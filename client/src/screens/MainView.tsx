import React, { useCallback, useState } from "react";

import { useQuery } from "react-query";

import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";
import DetailsModal from "../components/DetailsModal";
import { getSearchedData, getTerms } from "../tools/apis";

function MainView() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchInput, setSearchInput] = useState("");

	const termsData = useQuery({
		queryKey: ["terms", currentPage, searchInput],
		queryFn: () => (searchInput ? getSearchedData(searchInput) : getTerms(currentPage)),
		staleTime: 10 * (60 * 1000),
		refetchOnWindowFocus: false
	});

	const handleTableChange = useCallback((pagination) => {
		setCurrentPage(pagination.current);
	}, []);

	const dataSource = {
		terms: termsData.data?.data?.results,
		totalElements: termsData.data?.data?.count
	};

	return (
		<>
			<SearchBar searchInputHandler={setSearchInput} />
			<DataTable
				dataSource={dataSource.terms}
				totalCount={dataSource.totalElements}
				currentPage={currentPage}
				isLoading={termsData.isLoading}
				handleTableChange={handleTableChange}
			/>
			<DetailsModal />
		</>
	);
}

export default React.memo(MainView);
