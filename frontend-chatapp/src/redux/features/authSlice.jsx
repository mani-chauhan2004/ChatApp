import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const verifyToken = createAsyncThunk('auth/verifyToken', async () => {
    try {
        const response = await axios.get('http://localhost:8080/auth/api/verify-token', {
            withCredentials: true,
        })
        return response.data;
    }catch(error) {
        console.log(error);
        return rejectWithValue(error.response?.data?.message || 'Token verification failed');
    };
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        isAuthenticated: false,
        error: null,
    },

    reducers: {
        isAuthenticatedTrue: (state) => {
            state.isAuthenticated = true;
        },

        isAuthenticatedFalse: (state) => {
            state.isAuthenticated = false;
        }
    },
    
    extraReducers: (builder) => {
        builder.addCase(verifyToken.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(verifyToken.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.result;
            state.loading = false;
        });
        builder.addCase(verifyToken.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { isAuthenticatedTrue, isAuthenticatedFalse } = authSlice.actions;
export default authSlice.reducer;
