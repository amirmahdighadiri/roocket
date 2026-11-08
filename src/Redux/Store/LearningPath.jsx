import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getLearningPathFromServer = createAsyncThunk(
    "getLearningPathFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from('learning_paths')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "learningPath",
    initialState: {
        learningPath: [],
        learningPathLoading: false,
        learningPathError: null,
        learningPathHasFetched: false,
    },

    reducers: {},

    extraReducers: builder => {
        builder.addCase(getLearningPathFromServer.pending, state => {
            state.learningPathLoading = true;
            state.learningPathError = null;
        });

        builder.addCase(getLearningPathFromServer.fulfilled, (state, action) => {
            state.learningPath = action.payload;
            state.learningPathLoading = false;
            state.learningPathHasFetched = true;
        });

        builder.addCase(getLearningPathFromServer.rejected, (state, action) => {
            state.learningPathLoading = false;
            state.learningPathError = action.payload || action.error.message;
            state.learningPathHasFetched = true;
        });
    }
});

export default slice.reducer;
