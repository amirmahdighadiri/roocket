import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getFollowedEpisodesFromServer = createAsyncThunk(
    "followedEpisodes/getFollowedEpisodesFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("followed_episodes")
            .select("*, episode:episodes(*)")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const followedEpisodesSlice = createSlice({
    name: "followedEpisodes",
    initialState: {
        followedEpisodes: [],
        followedEpisodesLoading: false,
        followedEpisodesError: null,
        followedEpisodesHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFollowedEpisodesFromServer.pending, (state) => {
            state.followedEpisodesLoading = true;
            state.followedEpisodesError = null;
        });

        builder.addCase(getFollowedEpisodesFromServer.fulfilled, (state, action) => {
            state.followedEpisodesLoading = false;
            state.followedEpisodes = action.payload;
            state.followedEpisodesHasFetched = true;
        });

        builder.addCase(getFollowedEpisodesFromServer.rejected, (state, action) => {
            state.followedEpisodesLoading = false;
            state.followedEpisodesError = action.payload || action.error.message;
        });
    },
});

export default followedEpisodesSlice.reducer;
