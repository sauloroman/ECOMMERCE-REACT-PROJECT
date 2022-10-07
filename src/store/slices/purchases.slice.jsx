import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getConfig } from '../../helpers';
import { setIsLoading } from './isLoading.slice';


export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {

            setPurchases( _store, action ) {
                  return action.payload;
            }
    }
})

export const getPurchasesThunk = () => dispatch => {

      dispatch( setIsLoading( true ) );

      return axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig() )
            .then( res => dispatch( setPurchases( res.data.data.purchases ) ) )
            .finally( () =>  dispatch( setIsLoading( false ) ) )

}

export const postPurchasesThunk = address => dispatch => {

      return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', address, getConfig() )
            .then( () => dispatch( getPurchasesThunk() ) )
         
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
