import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getCourseProgressFromServer = createAsyncThunk(
    "courseProgress/getCourseProgressFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("course_progress")
            .select(`*, course:courses(*)`)
            .eq("user_id", userId)
            .order("updated_at", { ascending: false });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const courseProgressSlice = createSlice({
    name: "courseProgress",
    initialState: {
        courseProgress: [],
        courseProgressLoading: false,
        courseProgressError: null,
        courseProgressHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseProgressFromServer.pending, (state) => {
            state.courseProgressLoading = true;
            state.courseProgressError = null;
        });

        builder.addCase(getCourseProgressFromServer.fulfilled, (state, action) => {
            state.courseProgressLoading = false;
            state.courseProgress = action.payload;
            state.courseProgressHasFetched = true;
        });

        builder.addCase(getCourseProgressFromServer.rejected, (state, action) => {
            state.courseProgressLoading = false;
            state.courseProgressError = action.payload || action.error.message;
        });
    },
});

export default courseProgressSlice.reducer;
