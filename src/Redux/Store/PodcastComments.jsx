import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getPodcastCommentsFromServer = createAsyncThunk(
    "podcastComments/getPodcastCommentsFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("podcast_comments")
            .select("*")
            .order("created_at", { ascending: true })
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const podcastCommentsSlice = createSlice({
    name: "podcastComments",
    initialState: {
        podcastComments: [],
        podcastCommentsLoading: false,
        podcastCommentsError: null,
        podcastCommentsHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPodcastCommentsFromServer.pending, (state) => {
            state.podcastCommentsLoading = true;
            state.podcastCommentsError = null;
        });

        builder.addCase(getPodcastCommentsFromServer.fulfilled, (state, action) => {
            state.podcastCommentsLoading = false;
            state.podcastComments = action.payload;
            state.podcastCommentsHasFetched = true;
        });

        builder.addCase(getPodcastCommentsFromServer.rejected, (state, action) => {
            state.podcastCommentsLoading = false;
            state.podcastCommentsError = action.payload || action.error.message;
        });
    },
});

export default podcastCommentsSlice.reducer;
