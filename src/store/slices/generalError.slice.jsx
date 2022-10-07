import { createSlice } from '@reduxjs/toolkit';

export const generalErrorSlice = createSlice({
    name: 'texterror',
    initialState: '',
    reducers: {
            setTextError( _store, action ) {
                  return action.payload;
            }
    }
})

export const { setTextError } = generalErrorSlice.actions;

export default generalErrorSlice.reducer;
