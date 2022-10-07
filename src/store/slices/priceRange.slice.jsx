import { createSlice } from '@reduxjs/toolkit';

export const priceRangeSlice = createSlice({
    name: 'priceRange',
    initialState: '',
    reducers: {

            setPriceRange( _store, action ) {
                  return action.payload;
            }

    }
})

export const { setPriceRange } = priceRangeSlice.actions;

export default priceRangeSlice.reducer;
