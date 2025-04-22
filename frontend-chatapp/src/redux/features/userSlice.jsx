import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDp = createAsyncThunk('user/getDp', async() => {
    const response = await axios.get("http://localhost:8080/user/api/send-dp",{
        withCredentials: true,
    });
    return response.data;
});

export const getFriends = createAsyncThunk('user/getFriends', async() => {
    const response = await axios.get("http://localhost:8080/user/api/get-friends", {
        withCredentials: true,
    });

    return response.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loadingDp: false,
        loadingFriends: false,
        dp: null,
        loggedInUser: null,
        friends: [],
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

        builder.addCase(getDp.pending, (state) => {
            state.loadingDp = true;
        });
        builder.addCase(getDp.fulfilled, (state, action) => {
            state.loadingDp = false;
            if(!action.payload.dpLink) {
                state.error(action.payload.error);
            }
            state.dp = action.payload.dpLink;
        });
        builder.addCase(getDp.rejected, (state, action) => {
            state.loadingDp = false;
            state.error = action.payload;
        });
        
        builder.addCase(getFriends.pending, (state) => {
            state.loadingFriends = true;
        });
        builder.addCase(getFriends.fulfilled, (state, action) => {
            state.loadingFriends = false;
            if(!action.payload.friends) {
                state.error(action.payload.error);
            }
            state.friends = action.payload.friends;
        });
        builder.addCase(getFriends.rejected, (state, action) => {
            state.loadingFriends = false;
            state.error = action.payload;
        });
    }
})

export default userSlice.reducer;
export const { nullifyDp, setLoggedInUser } = userSlice.actions;