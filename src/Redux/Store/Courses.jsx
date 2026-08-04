import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
    "getCoursesFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)
const slice = createSlice({
    name: "courses",
    initialState: {
        courses: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getCoursesFromServer.pending , (state, action) => {
            state.loading = true
        })

        builder.addCase(getCoursesFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
    }
})

export default slice.reducer;