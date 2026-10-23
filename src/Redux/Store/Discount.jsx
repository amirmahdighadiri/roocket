import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getDiscountFromServer = createAsyncThunk(
    "getDiscountFromServer",
    async ()=>{
        return await fetch(`http://localhost:3000/discounts`).then(res => res.json()).then(data => data)
    }
)

const slice = createSlice({
    name: "discounts",
    initialState: {
        discounts: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getDiscountFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.discounts = action.payload;
        })
    }
})

export default slice.reducer;