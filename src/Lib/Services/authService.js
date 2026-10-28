
import { supabase } from "../supabaseClient.js";

// sign-up user
export async function registerUser({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            },
        },
    });

    if (error) throw error;

    return data;
}

// login user
export async function loginUser({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;

    return data;
}

// logout user
export async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
}
