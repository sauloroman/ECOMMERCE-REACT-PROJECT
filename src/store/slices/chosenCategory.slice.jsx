import { createSlice } from '@reduxjs/toolkit';

export const chosenCategorySlice = createSlice({
    name: 'chosenCategory',
    initialState: 'All products',
    reducers: {
            setChosenCategory( _store, action ) {
                  return action.payload;
            }
    }
})

export const { setChosenCategory } = chosenCategorySlice.actions;

export default chosenCategorySlice.reducer;
