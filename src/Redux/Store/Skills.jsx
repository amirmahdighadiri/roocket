
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getSkillsFromServer = createAsyncThunk(
    "getSkillsFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("skills")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "skills",

    initialState: {
        skills: [],
        skillsLoading: false,
        skillsError: null,
        skillsHasFetched: false,
    },

    reducers: {},

    extraReducers: builder => {
        builder.addCase(getSkillsFromServer.pending, state => {
            state.skillsLoading = true;
            state.skillsError = null;
        });

        builder.addCase(getSkillsFromServer.fulfilled, (state, action) => {
            state.skills = action.payload;
            state.skillsLoading = false;
            state.skillsHasFetched = true;
        });

        builder.addCase(getSkillsFromServer.rejected, (state, action) => {
            state.skillsLoading = false;
            state.skillsError = action.payload || action.error.message;
            state.skillsHasFetched = true;
        });
    }
});

export default slice.reducer;
