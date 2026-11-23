import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Lib/supabaseClient";

export const getEnrollmentsFromServer = createAsyncThunk(
    "getEnrollmentsFromServer",
    async (userId, { rejectWithValue }) => {
        const { data, error } = await supabase
            .from("enrollments")
            .select("*")
            .eq("user_id", userId)
            .order("id", { ascending: true });

        if (error) {
            return rejectWithValue(error.message);
        }

        return data;
    }
);

export const addEnrollmentToServer = createAsyncThunk(
    "enrollments/addEnrollmentToServer",
    async ({ user_id, course_id }, { rejectWithValue }) => {
        const { data: existingEnrollment, error: checkError } = await supabase
            .from("enrollments")
            .select("*")
            .eq("user_id", user_id)
            .eq("course_id", course_id)
            .maybeSingle();

        if (checkError) {
            return rejectWithValue(checkError.message);
        }

        if (existingEnrollment) {
            return {
                enrollment: existingEnrollment,
                isNew: false,
            };
        }

        const { data, error } = await supabase
            .from("enrollments")
            .insert({ user_id, course_id })
            .select("*")
            .single();

        if (error) {
            return rejectWithValue(error.message);
        }

        return {
            enrollment: data,
            isNew: true,
        };
    }
);

const slice = createSlice({
    name: "enrollments",
    initialState: {
        enrollments: [],
        enrollmentLoading: false,
        enrollmentError: null,
        enrollmentHasFetched: false,

        enrollmentAddLoading: false,
        enrollmentAddError: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getEnrollmentsFromServer.pending, (state) => {
            state.enrollmentLoading = true;
            state.enrollmentError = null;
        });

        builder.addCase(getEnrollmentsFromServer.fulfilled, (state, action) => {
            state.enrollmentLoading = false;
            state.enrollments = action.payload;
            state.enrollmentHasFetched = true;
        });

        builder.addCase(getEnrollmentsFromServer.rejected, (state, action) => {
            state.enrollmentLoading = false;
            state.enrollmentError = action.payload || action.error.message;
        });

        // ! Add Enrollment

        builder.addCase(addEnrollmentToServer.pending, (state) => {
            state.enrollmentAddLoading = true;
            state.enrollmentAddError = null;
        });

        builder.addCase(addEnrollmentToServer.fulfilled, (state, action) => {
            state.enrollmentAddLoading = false;

            if (action.payload.isNew) {
                state.enrollments.push(action.payload.enrollment);
            }
        });

        builder.addCase(addEnrollmentToServer.rejected, (state, action) => {
            state.enrollmentAddLoading = false;
            state.enrollmentAddError = action.payload || action.error.message;
        });
    },
});

export default slice.reducer;