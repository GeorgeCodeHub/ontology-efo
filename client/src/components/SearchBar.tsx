import React from "react";

import { Input } from "antd";

import "../styles/SearchBar.scss";

const { Search } = Input;

function SearchBar({ searchInputHandler }) {
	const onChange = (e) => {
		if (e.target.value === "") searchInputHandler("");
	};

	const onSearch = (value: string) => {
		searchInputHandler(value);
	};

	return (
		<div className="search-bar-container" style={{ flex: 0 }}>
			<Search
				placeholder="Search..."
				allowClear={false}
				enterButton="Search"
				size="large"
				onChange={onChange}
				onSearch={onSearch}
			/>
		</div>
	);
}

export default React.memo(SearchBar);
