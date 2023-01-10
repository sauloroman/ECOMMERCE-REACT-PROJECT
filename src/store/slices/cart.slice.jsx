import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { getConfig } from '../../helpers';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

            onSetCart( _store, action ) {
                  return action.payload;
            }

    }
})

export const getUserCartThunk = () => dispatch => {

      dispatch( setIsLoading( true ));

      return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig() )
            .then( res => dispatch( onSetCart( res.data.data.cart.products ) ) ) 
            .catch( err => console.log( err ))
            .finally( () => dispatch( setIsLoading( false ) ))

}

export const postProductOnCartThunk = product => (dispatch) => {

      return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', product, getConfig() )
            .then( () => dispatch( getUserCartThunk() ) )    
            .catch( err => alert( err.response.data.message ) )

}

export const deleteProductOnCartThunk = id => (dispatch) => {

      return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`, getConfig() )
            .then( () => dispatch( getUserCartThunk() ) )

}

export const updateProductOnCartThunk = product => dispatch => {

      return axios.patch('https://e-commerce-api.academlo.tech/api/v1/cart', product, getConfig() )
            .then( () => dispatch( getUserCartThunk() ));

}

export const { onSetCart } = cartSlice.actions;

export default cartSlice.reducer;
