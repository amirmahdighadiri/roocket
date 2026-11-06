import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getDiscountFromServer = createAsyncThunk(
    "discounts/getDiscountFromServer",
    async (_, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("discounts")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const slice = createSlice({
    name: "discounts",

    initialState: {
        discounts: [],
        discountsLoading: false,
        discountsError: false,
        discountsHasFetched: false,
    },

    reducers: {},

    extraReducers: (builder) => {
             builder.addCase(getDiscountFromServer.pending, (state) => {
                state.discountsLoading = true;
                state.discountsError = false;
            })

            builder.addCase(getDiscountFromServer.fulfilled, (state, action) => {
                state.discountsLoading = false;
                state.discounts = action.payload;
                state.discountsHasFetched = true;
            })

            builder.addCase(getDiscountFromServer.rejected, (state) => {
                state.discountsLoading = false;
                state.discountsError = true;
                state.discountsHasFetched = true;
            });
    },
});

export default slice.reducer;