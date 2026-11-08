
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getPodcastsFromServer = createAsyncThunk(
    "getPodcastsFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from('episodes')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "podcasts",

    initialState: {
        podcasts: [],
        podcastsLoading: false,
        podcastsError: null,
        podcastsHasFetched: false,
    },

    reducers: {},

    extraReducers: builder => {
        builder.addCase(getPodcastsFromServer.pending, state => {
            state.podcastsLoading = true;
            state.podcastsError = null;
        });

        builder.addCase(getPodcastsFromServer.fulfilled, (state, action) => {
            state.podcasts = action.payload;
            state.podcastsLoading = false;
            state.podcastsHasFetched = true;
        });

        builder.addCase(getPodcastsFromServer.rejected, (state, action) => {
            state.podcastsLoading = false;
            state.podcastsError = action.payload || action.error.message;
            state.podcastsHasFetched = true;
        });
    }
});

export default slice.reducer;
