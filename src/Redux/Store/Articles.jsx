import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getArticlesFromServer = createAsyncThunk(
    "getArticlesFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("articles")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        articleLoading: false,
        articleError: null,
        articleHasFetched: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.pending, (state) => {
            state.articleLoading = true;
            state.articleError = null;
        });

        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
            state.articleLoading = false;
            state.articles = action.payload;
            state.articleHasFetched = true;
        });

        builder.addCase(getArticlesFromServer.rejected, (state, action) => {
            state.articleLoading = false;
            state.articleError = action.payload || action.error.message;
        });
    },
});

export default slice.reducer;