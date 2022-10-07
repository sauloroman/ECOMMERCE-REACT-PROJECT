import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers: {

            setProduct( _store, action ) {
                  return action.payload;
            }

    }
})

export const getProductThunk = id => dispatch => {

      dispatch( setIsLoading( true) );

      axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then( res => dispatch( setProduct(res.data.data.product) ) )
            .finally( () => dispatch( setIsLoading( false ) ) );

}

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
