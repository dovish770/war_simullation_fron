    import { createSlice, PayloadAction } from "@reduxjs/toolkit";
    import UserState from "../../types/reduxTypes/userState";
    import { LoginResponse } from '../../types/serverTypes/LoginTypes'
    import { loginUser, signInUser } from '../../service/usersService'

    const initialState: UserState = {
        user: null,
        status: "idle",
        error: null,
        token: null
    };

    const userSlice = createSlice({
        name: 'User',
        initialState,
        reducers: {
            logout: (state) => {
                state.user = null;  
                state.token = null;
                state.error = null;
            },
            resetError: (state) => {
                state.error = null;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(loginUser.pending, (state) => {
                    state.status = "loading";
                    state.error = null;
                })
                .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
                    state.status = "succeeded";
                    state.user = action.payload.user;
                    state.token = action.payload.token as string;
                })
                .addCase(loginUser.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "Login failed";
                })
                .addCase(signInUser.pending, (state) => {
                    state.status = "loading";
                    state.error = null;
                })
                .addCase(signInUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
                    state.status = "succeeded";
                    state.user = action.payload.user;
                })
                .addCase(signInUser.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.payload || "Register failed";
                });
        }
    });
    
    export const { logout, resetError } = userSlice.actions;
    export default userSlice.reducer;

