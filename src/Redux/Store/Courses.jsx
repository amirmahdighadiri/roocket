import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getCoursesFromServer = createAsyncThunk(
    "getCoursesFromServer",
    async (_, { rejectWithValue }) => {

        const { data, error } = await supabase
            .from("courses")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
)
const slice = createSlice({
    name: "courses",
    initialState: {
        courses: [],
        courseLoading: false,
        courseError: null,
        courseHasFetched: false,
    },
    reducers: {},
    extraReducers: builder => {

        builder.addCase(getCoursesFromServer.pending, state => {
            state.courseLoading = true;
            state.courseError = null;
        });

        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
            state.courseLoading = false;
            state.courses = action.payload;
            state.courseHasFetched = true;
        });

        builder.addCase(getCoursesFromServer.rejected, (state, action) => {
            state.courseLoading  = false;
            state.courseError = action.payload || action.error.message;
        });
    }
})

export default slice.reducer;