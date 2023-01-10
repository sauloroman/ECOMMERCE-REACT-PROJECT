import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
            setProducts( _store, action ) {
                  return action.payload;
            }
    }
})

export const getProductsThunk = () => dispatch => {

      dispatch( setIsLoading( true ) );

      return axios.get('https://e-commerce-api.academlo.tech/api/v1/products')  
            .then( res => dispatch( setProducts(res.data.data.products) ) )
            .finally( () => dispatch( setIsLoading( false ) ) );

}

export const getProductsByCategoryThunk = categoryId => dispatch => {

      dispatch( setIsLoading( true ) );

      return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${categoryId}`)  
            .then( res => dispatch( setProducts(res.data.data.products) ) )
            .finally( () => dispatch( setIsLoading( false ) ) );

}

export const {  setProducts } = productsSlice.actions;

export default productsSlice.reducer;
