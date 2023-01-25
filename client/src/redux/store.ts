import { configureStore } from "@reduxjs/toolkit";

import { termsSlice } from "./termsReducer";

export default configureStore({
	reducer: {
		terms: termsSlice.reducer
	}
});
