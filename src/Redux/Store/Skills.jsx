import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getSkillsFromServer = createAsyncThunk(
    "getSkillsFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)
const slice = createSlice({
    name: "skills",
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSkillsFromServer.fulfilled , (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer;