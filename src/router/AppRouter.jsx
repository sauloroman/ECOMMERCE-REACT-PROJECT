import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

import { setIsLoading } from '../store/slices/isLoading.slice'
import { setUser } from '../store/slices/user.slice'

import { ProductPage, ProductsPage } from '../products/pages'
import { Cart, LoadingScreen, Navigation } from '../ui/components'
import { Footer } from '../ui/components'
import { PublicRoutes, PrivateRoutes } from './'
import { LoginPage, SignUpPage } from '../auth'
import { PurchasesPage, UserPage } from '../users/pages'
import { getUserCartThunk } from '../store/slices/cart.slice'
import { getPurchasesThunk } from '../store/slices/purchases.slice'

export const AppRouter = () => {

      const dispatch = useDispatch();

      const isLoading = useSelector( store => store.isLoading );
      const user = useSelector( store => store.user );

      useEffect( () => {
            dispatch( setIsLoading(false) );
            dispatch( setUser( {
                        user: JSON.parse ( localStorage.getItem('user') ) || '',
                        token: localStorage.getItem('token') || ''
            } ) )  
      }, [] );
      
      useEffect( () => {
            if ( user.user?.id ) {
                  localStorage.setItem('user', JSON.stringify (user.user) );
                  localStorage.setItem('token', user.token );
                  dispatch( getUserCartThunk() );
                  dispatch( getPurchasesThunk() );
            }
      }, [ user.user ] )

      return (
            <>    
                  { isLoading && <LoadingScreen /> }

                  <Navigation />

                  <Container>

                        <Routes>
                              <Route path="/" element={<ProductsPage />}/>
                              <Route path="/product/:id" element={<ProductPage />}/>
                              <Route path="/*" element={ <Navigate to="/"/> }/>

                              <Route path="/login" element={
                                    <PublicRoutes>
                                          <LoginPage />
                                    </PublicRoutes>
                              } />

                              <Route path="/signup" element={
                                    <PublicRoutes>
                                          <SignUpPage />
                                    </PublicRoutes>
                              } />

                              <Route path="/purchases" element={
                                    <PrivateRoutes>
                                          <PurchasesPage />
                                    </PrivateRoutes>
                              } />

                              <Route path="/user" element={
                                    <PrivateRoutes>
                                          <UserPage />
                                    </PrivateRoutes>
                              } />

                        </Routes>

                        <Cart />

                  </Container> 

                  <Footer />
            </>
      )
}
