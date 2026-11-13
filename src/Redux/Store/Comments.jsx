import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {supabase} from "../../Lib/supabaseClient";

// ! -------------------- Get Comments -------------------- !

export const getCommentsFromServer = createAsyncThunk(
    "comments/getCommentsFromServer",
    async (_, {rejectWithValue}) => {
        const {data, error} = await supabase
            .from("comments")
            .select("*")
            .order("created_at", {ascending: true})
            .order("id", {ascending: true});

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

// ! -------------------- Add Comment -------------------- !

export const addCommentToServer = createAsyncThunk(
    "comments/addCommentToServer",
    async ({course_id, parent_id = null, text}, {rejectWithValue}) => {
        const {data: {user}, error: userError} =
            await supabase.auth.getUser();

        if (userError || !user) {
            return rejectWithValue(
                userError?.message || "برای ثبت کامنت باید وارد حساب کاربری شوید."
            );
        }

        const user_name =
            user.user_metadata?.full_name || user.email;

        const {data, error} = await supabase
            .from("comments")
            .insert({
                course_id,
                parent_id,
                text,
                user_name,
            })
            .select()
            .single();

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

// ! -------------------- Delete Comment -------------------- !

export const deleteCommentFromServer = createAsyncThunk(
    "comments/deleteCommentFromServer",
    async (commentId, {rejectWithValue}) => {
        const {data, error} = await supabase
            .from("comments")
            .delete()
            .eq("id", commentId)
            .select("id")
            .single();

        if (error) {
            return rejectWithValue(error.message);
        }

        return data.id;
    }
);

// ! -------------------- Comments Slice -------------------- !

const commentsSlice = createSlice({
    name: "comments",

    initialState: {
        comments: [],

        commentsLoading: false,
        commentsError: null,
        commentsHasFetched: false,

        addCommentLoading: false,
        addCommentError: null,

        deleteCommentLoading: false,
        deleteCommentError: null,
    },

    reducers: {},

    extraReducers: builder => {

        // ! Get Comments

        builder.addCase(getCommentsFromServer.pending, state => {
            state.commentsLoading = true;
            state.commentsError = null;
        })

        builder.addCase(getCommentsFromServer.fulfilled, (state, action) => {
            state.commentsLoading = false;
            state.commentsHasFetched = true;
            state.comments = action.payload;
        })

        builder.addCase(getCommentsFromServer.rejected, (state, action) => {
            state.commentsLoading = false;
            state.commentsError = action.payload || action.error.message;
        });

        // ! Add Comment

        builder.addCase(addCommentToServer.pending, state => {
            state.addCommentLoading = true;
            state.addCommentError = null;
        })

        builder.addCase(addCommentToServer.fulfilled, (state, action) => {
            state.addCommentLoading = false;
            state.comments.push(action.payload);
        })

        builder.addCase(addCommentToServer.rejected, (state, action) => {
            state.addCommentLoading = false;
            state.addCommentError = action.payload || action.error.message;
        });

        // ! Delete Comment

        builder.addCase(deleteCommentFromServer.pending, state => {
            state.deleteCommentLoading = true;
            state.deleteCommentError = null;
        })

        builder.addCase(deleteCommentFromServer.fulfilled, (state, action) => {
            state.deleteCommentLoading = false;

            const deletedIds = new Set([action.payload]);

            let hasNewDeletedComment = true;

            while (hasNewDeletedComment) {
                hasNewDeletedComment = false;

                state.comments.forEach(comment => {
                    if (
                        deletedIds.has(comment.parent_id) &&
                        !deletedIds.has(comment.id)
                    ) {
                        deletedIds.add(comment.id);
                        hasNewDeletedComment = true;
                    }
                });
            }

            state.comments = state.comments.filter(
                comment => !deletedIds.has(comment.id)
            );
        })

        builder.addCase(deleteCommentFromServer.rejected, (state, action) => {
            state.deleteCommentLoading = false;
            state.deleteCommentError = action.payload || action.error.message;
        });
    },
});

export default commentsSlice.reducer;
