import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import ArsenalReducer from '../features/dashboard/DashboardSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    arsenal: ArsenalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;