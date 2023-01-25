import { http } from "./http";

export const getTerms = (currentPage) =>
	http.get("http://127.0.0.1:8000/api/get_terms", { params: { page: currentPage } });

export const getTermLinkData = (url) => http.get(url);

export const getSearchedData = (value) =>
	http.get("http://127.0.0.1:8000/api/search_terms", { params: { search: value } });
