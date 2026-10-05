import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCommentsFromServer = createAsyncThunk(
    "getCommentsFromServer",
    async (courseId) => {
        const [commentsRes, usersRes] = await Promise.all([
            fetch(`http://localhost:3000/comments?courseId=${courseId}`),
            fetch(`http://localhost:3000/users`)
        ]);

        const comments = await commentsRes.json();
        const users = await usersRes.json();

        return comments.map(comment => ({
            ...comment,
            user: users.find(user => user.id === comment.userId)
        }));
    }
)
const slice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        loading: false,
    },
    reducers: {},
    loading : false,
    extraReducers: builder => {
        builder.addCase(getCommentsFromServer.pending , (state, action) => {
            state.loading = true
        })

        builder.addCase(getCommentsFromServer.fulfilled , (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        })
    }
})

export default slice.reducer;