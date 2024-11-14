import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchArsenal } from '../../service/dashboardService';
import ArsenalState from '../../types/reduxTypes/arsenalState';
import ArsenalResponse from '../../types/modelTypes/ArsenalResponse';
import { activeOrNotSocket } from '../../socket/socketService';
const initialState: ArsenalState = {
    arsenal: null,
    status: 'idle',
    error: null,
};

const ArsenalSlice = createSlice({
    name: 'Arsenal',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArsenal.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchArsenal.fulfilled, (state, action: PayloadAction<ArsenalResponse>) => {
                state.status = 'succeeded';
                state.arsenal = action.payload;             
                activeOrNotSocket(state.arsenal)                
            })
            .addCase(fetchArsenal.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to load user';
            });
    },
});

export const { resetError } = ArsenalSlice.actions;
export default ArsenalSlice.reducer;
