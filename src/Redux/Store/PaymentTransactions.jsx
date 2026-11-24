import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getPaymentTransactionsFromServer = createAsyncThunk(
    "paymentTransactions/getPaymentTransactionsFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("payment_transactions")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

const paymentTransactionsSlice = createSlice({
    name: "paymentTransactions",
    initialState: {
        paymentTransactions: [],
        paymentTransactionsLoading: false,
        paymentTransactionsError: null,
        paymentTransactionsHasFetched: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPaymentTransactionsFromServer.pending, (state) => {
            state.paymentTransactionsLoading = true;
            state.paymentTransactionsError = null;
        });

        builder.addCase(getPaymentTransactionsFromServer.fulfilled, (state, action) => {
            state.paymentTransactionsLoading = false;
            state.paymentTransactions = action.payload;
            state.paymentTransactionsHasFetched = true;
        });

        builder.addCase(getPaymentTransactionsFromServer.rejected, (state, action) => {
            state.paymentTransactionsLoading = false;
            state.paymentTransactionsError = action.payload || action.error.message;
        });
    },
});

export default paymentTransactionsSlice.reducer;
