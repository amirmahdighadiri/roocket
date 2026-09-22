import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
    "getArticlesFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)
const slice = createSlice({
    name: "articles",
    initialState: {
        articles: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getArticlesFromServer.pending , (state, action) => {
            state.loading = true
        })

        builder.addCase(getArticlesFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.articles = action.payload;
        })
    }
})

export default slice.reducer;