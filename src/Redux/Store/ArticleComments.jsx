import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getArticleCommentsFromServer = createAsyncThunk(
    "articleComments/getArticleCommentsFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("article_comments")
            .select("*")
            .order("created_at", { ascending: true })
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const articleCommentsSlice = createSlice({
    name: "articleComments",
    initialState: {
        articleComments: [],
        articleCommentsLoading: false,
        articleCommentsError: null,
        articleCommentsHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticleCommentsFromServer.pending, (state) => {
            state.articleCommentsLoading = true;
            state.articleCommentsError = null;
        });

        builder.addCase(getArticleCommentsFromServer.fulfilled, (state, action) => {
            state.articleCommentsLoading = false;
            state.articleComments = action.payload;
            state.articleCommentsHasFetched = true;
        });

        builder.addCase(getArticleCommentsFromServer.rejected, (state, action) => {
            state.articleCommentsLoading = false;
            state.articleCommentsError = action.payload || action.error.message;
        });
    },
});

export default articleCommentsSlice.reducer;
