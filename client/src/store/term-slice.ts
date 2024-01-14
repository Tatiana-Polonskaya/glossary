import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TermState {
    terms: [];
}

const initialState: TermState = {
    terms: [],
};

export const termSlice = createSlice({
    name: "term",
    initialState,
    reducers: {
        setTerms: (state, action: PayloadAction<[]>) => {
            state.terms = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTerms } = termSlice.actions;

export default termSlice.reducer;
