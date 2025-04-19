import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('user/loginUser', () => {
    return axios.post("http://localhost:8080/auth/api/login", {
        withCredentials: true,
    })
});

export const getDp = createAsyncThunk('user/getDp', async(loggedInUser) => {
    const response = await axios.get("http://localhost:8080/user/api/send-dp",{
        withCredentials: true,
    });
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        dp: null,
        loggedInUser: null,
        error: null,
    },

    reducers: {
        nullifyDp: (state) => {
            state.dp = null;
        },
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload.userId;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload);
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
        });

        builder.addCase(getDp.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getDp.fulfilled, (state, action) => {
            state.loading = false;
            if(!action.payload.dpLink) {
                state.error(action.payload.error);
            }
            state.dp = action.payload.dpLink;
        });
        builder.addCase(getDp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        
    }
})

export default userSlice.reducer;
export const { nullifyDp, setLoggedInUser } = userSlice.actions;