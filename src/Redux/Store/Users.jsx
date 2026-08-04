import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
    "getUsersFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)

const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsersFromServer.fulfilled , (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer