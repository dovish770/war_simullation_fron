import { LoginData, LoginResponse } from '../types/serverTypes/LoginTypes'
import { signInResponse, signInData } from '../types/serverTypes/SigninTypes'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import IUser from '../types/modelTypes/user';

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginUser = createAsyncThunk<LoginResponse, LoginData, { rejectValue: string }>(
    'user/login',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, loginData);
            const token = response.data.token
            if (token) {
                localStorage.setItem('Token', token);
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const signInUser = createAsyncThunk<signInResponse, signInData, { rejectValue: string }>('user/signIn', async (registerData, { rejectWithValue })=>{
    try {
        const response = await axios.post<signInResponse>(`${BASE_URL}/signIn`, registerData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'signIn failed');
    }
})

export const navigateToDashboard = (user:IUser):string=> {   
    return user.isDefence? "defence" : "attack"
}



