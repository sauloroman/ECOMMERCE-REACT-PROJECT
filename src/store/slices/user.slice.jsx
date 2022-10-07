import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import { setTextError } from './generalError.slice';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {

            setUser( _store, action ) {    
                  return action.payload;
            },


    }
})

export const LoginUserThunk = user => dispatch => {

      dispatch( setIsLoading( true ) );

      return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`, user )
            .then( res => dispatch( setUser( res.data.data ) ) )
            .catch( err => dispatch( setTextError( err.response.data.message ) ) )
            .finally( () => dispatch( setIsLoading( false ) ) )

}

export const createUserThunk = userInfo => dispatch => {
      dispatch( setIsLoading( true ) );

      return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, userInfo )
            .catch( err => dispatch( setTextError( err.response.data.message ) ) )
            .finally( () => dispatch( setIsLoading( false ) ) )
}

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
