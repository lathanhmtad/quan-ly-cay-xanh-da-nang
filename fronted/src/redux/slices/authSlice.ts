import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NguoiDungResponse} from '../../models/NguoiDung';

interface AuthState {
    accessToken: string | null
    nguoiDung: NguoiDungResponse | null
}

const initialState: AuthState = {
    accessToken: null,
    nguoiDung: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        updateParticipant: (state, action: PayloadAction<NguoiDungResponse>) => {
            state.nguoiDung = action.payload;
        },
        resetAuthState: (state) => {
            state.accessToken = null;
            state.nguoiDung = null;
        }
    },
});

export const {
    updateAccessToken,
    updateParticipant, resetAuthState
} = authSlice.actions;

export default authSlice.reducer;