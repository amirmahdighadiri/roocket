import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getEnrollmentsFromServer = createAsyncThunk(
    "getEnrollmentsFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("enrollments")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "enrollments",
    initialState: {
        enrollments: [],
        enrollmentLoading: false,
        enrollmentError: null,
        enrollmentHasFetched: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getEnrollmentsFromServer.pending, (state) => {
            state.enrollmentLoading = true;
            state.enrollmentError = null;
        });

        builder.addCase(getEnrollmentsFromServer.fulfilled, (state, action) => {
            state.enrollmentLoading = false;
            state.enrollments = action.payload;
            state.enrollmentHasFetched = true;
        });

        builder.addCase(getEnrollmentsFromServer.rejected, (state, action) => {
            state.enrollmentLoading = false;
            state.enrollmentError = action.payload || action.error.message;
        });
    },
});

export default slice.reducer;