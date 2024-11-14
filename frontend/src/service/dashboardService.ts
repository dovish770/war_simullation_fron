import { createAsyncThunk } from '@reduxjs/toolkit';
import ArsenalResponse from '../types/modelTypes/ArsenalResponse';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetchArsenal = createAsyncThunk<ArsenalResponse, void, { rejectValue: string }>(
    'user/fetchArsenal',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('Token');
            
            const response = await axios.get(`${BASE_URL}/war_simulation/arsenal`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            return (response.data as { data: ArsenalResponse }).data;
        } catch (error: any) {  
            return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch arsenal');
        }
    }
);

