import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getFollowedTeachersFromServer = createAsyncThunk(
    "followedTeachers/getFollowedTeachersFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("followed_teachers")
            .select("*, teacher:teachers(*)")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const followedTeachersSlice = createSlice({
    name: "followedTeachers",
    initialState: {
        followedTeachers: [],
        followedTeachersLoading: false,
        followedTeachersError: null,
        followedTeachersHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFollowedTeachersFromServer.pending, (state) => {
            state.followedTeachersLoading = true;
            state.followedTeachersError = null;
        });

        builder.addCase(getFollowedTeachersFromServer.fulfilled, (state, action) => {
            state.followedTeachersLoading = false;
            state.followedTeachers = action.payload;
            state.followedTeachersHasFetched = true;
        });

        builder.addCase(getFollowedTeachersFromServer.rejected, (state, action) => {
            state.followedTeachersLoading = false;
            state.followedTeachersError = action.payload || action.error.message;
        });
    },
});

export default followedTeachersSlice.reducer;
