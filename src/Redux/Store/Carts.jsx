import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";


export const getUserCartsFromServer = createAsyncThunk(
    "carts/getUserCartsFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("carts")
            .select(` *, course:courses(*) `)
            .eq("user_id", userId)
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);


export const addUserCartToServer = createAsyncThunk(
    "carts/addUserCartToServer",
    async (newCartItem, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("carts")
            .insert(newCartItem)
            .select(`
        *,
        course:courses(*)
      `)
            .single();

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

export const removeUserCartFromServer = createAsyncThunk(
    "carts/removeUserCartFromServer",
    async (cartId, { rejectWithValue }) => {
        const { error } = await supabase
            .from("carts")
            .delete()
            .eq("id", cartId);

        if (error) {
            return rejectWithValue(error.message);
        }

        return cartId;
    }
);

const slice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
        cartsLoading: false,
        cartsError: false,
        cartsHasFetched: false,
        cartsAddLoading: false,
        cartsAddError: false,
        cartsRemoveLoading: false,
        cartsRemoveError: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        {/*<!-- ! -------------------- Get User Cart Extra Reducer -------------------- ! -->*/}
        builder.addCase(getUserCartsFromServer.pending , (state, action) => {
            state.cartsLoading = true;
            state.cartsError = false;
        })

        builder.addCase(getUserCartsFromServer.fulfilled , (state, action) => {
            state.cartsLoading = false;
            state.carts = action.payload;
            state.cartsHasFetched = true;
        })

        builder.addCase(getUserCartsFromServer.rejected , (state, action) => {
            state.cartsLoading = false;
            state.carts = action.payload;
            state.cartsHasFetched = true;
        })
        {/*<!-- ! -------------------- Add Cart Extra Reducer -------------------- ! -->*/}
        builder.addCase(addUserCartToServer.pending, (state) => {
            state.cartsAddLoading = true;
            state.cartsAddError = false;
        })

        builder.addCase(addUserCartToServer.fulfilled, (state, action) => {
            state.cartsAddLoading = false;
            state.carts.push(action.payload);
        })

        builder.addCase(addUserCartToServer.rejected, (state) => {
            state.cartsAddLoading = false;
            state.cartsAddError = true;
        })
        {/*<!-- ! -------------------- Remove Cart Extra Reducer -------------------- ! -->*/}
        builder.addCase(removeUserCartFromServer.pending, (state) => {
            state.cartsRemoveLoading = true;
            state.cartsRemoveError = false;
        })

        builder.addCase(removeUserCartFromServer.fulfilled, (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        })

        builder.addCase(removeUserCartFromServer.rejected, (state) => {
            state.cartsRemoveLoading = false;
            state.cartsRemoveError = true;
        })

    }
})

export default slice.reducer;