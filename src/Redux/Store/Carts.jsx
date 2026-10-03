import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCartsFromServer = createAsyncThunk(
    "getCartsFromServer",
    async (userId)=>{
        return await fetch(`http://localhost:3000/cart?userId=${userId}`).then(res => res.json()).then(data => data)
    }
)
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
    }
})

export default slice.reducer;