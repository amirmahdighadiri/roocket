import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCommentsFromServer = createAsyncThunk(
    "getCommentsFromServer",
    async () => {
        const [commentsRes, usersRes] = await Promise.all([
            fetch(`http://localhost:3000/comments`),
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

export const addCommentToServer = createAsyncThunk(
    "comments/addCommentToServer",
    async (newComment) => {
        const res = await fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment),
        });
        return await res.json();
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

        builder.addCase(addCommentToServer.fulfilled, (state, action) => {
            state.comments.push(action.payload);
        })
    }
})

export default slice.reducer;