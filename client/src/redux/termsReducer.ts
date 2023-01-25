import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedLink: { label: "", url: "" }
};

export const termsSlice = createSlice({
	name: "terms",
	initialState: initialState,
	reducers: {
		setSelectedLink: (state, { payload }) => {
			state.selectedLink = payload;
		}
	}
});

export const { setSelectedLink } = termsSlice.actions;
