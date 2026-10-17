import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCartsFromServer = createAsyncThunk(
    "getCartsFromServer",
    async (userId)=>{
        return await fetch(`http://localhost:3000/carts`).then(res => res.json()).then(data => data)
    }
)

export const addCartToServer = createAsyncThunk(
    "carts/addCartToServer",
    async (newCartItem) => {
        const res = await fetch("http://localhost:3000/carts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCartItem),
        });
        return await res.json();
    }
);

const slice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getCartsFromServer.pending , (state, action) => {
            state.loading = true
        })

        builder.addCase(getCartsFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.carts = action.payload;
        })

        builder.addCase(addCartToServer.fulfilled, (state, action) => {
            state.carts.push(action.payload);
        })
    }
})

export default slice.reducer;