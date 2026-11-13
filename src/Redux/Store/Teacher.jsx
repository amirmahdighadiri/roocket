import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getTeachersFromServer = createAsyncThunk(
    "getTeachersFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("teachers")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "teachers",
    initialState: {
        teachers: [],
        teacherLoading: false,
        teacherError: null,
        teacherHasFetched: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getTeachersFromServer.pending, (state) => {
            state.teacherLoading = true;
            state.teacherError = null;
        });

        builder.addCase(getTeachersFromServer.fulfilled, (state, action) => {
            state.teacherLoading = false;
            state.teachers = action.payload;
            state.teacherHasFetched = true;
        });

        builder.addCase(getTeachersFromServer.rejected, (state, action) => {
            state.teacherLoading = false;
            state.teacherError = action.payload || action.error.message;
            state.teacherHasFetched = true;
        });
    },
});

export default slice.reducer;