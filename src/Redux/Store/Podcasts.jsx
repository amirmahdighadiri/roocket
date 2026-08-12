import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPodcastsFromServer = createAsyncThunk(
    "getPodcastsFromServer",
    async (url)=>{
        return await fetch(url).then(res => res.json()).then(data => data)
    }
)
const slice = createSlice({
    name: "podcasts",
    initialState: {
        podcasts: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getPodcastsFromServer.pending , (state, action) => {
            state.loading = true
        })

        builder.addCase(getPodcastsFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.podcasts = action.payload;
        })
    }
})

export default slice.reducer;