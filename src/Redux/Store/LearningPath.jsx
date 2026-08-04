import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getLearningPathFromServer = createAsyncThunk(
    "getLearningPathFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)

const slice = createSlice({
    name: "learningPath",
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getLearningPathFromServer.fulfilled , (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer;