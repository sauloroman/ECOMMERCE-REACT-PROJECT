import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import categoriesSlice from './slices/categories.slice'
import chosenCategorySlice from './slices/chosenCategory.slice'
import generalErrorSlice from './slices/generalError.slice'
import isLoadingSlice from './slices/isLoading.slice'
import priceRangeSlice from './slices/priceRange.slice'
import productSlice from './slices/product.slice'
import productsSlice from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'
import userSlice from './slices/user.slice'

export default configureStore({
      reducer: {
            isLoading: isLoadingSlice,
            products: productsSlice,
            categories: categoriesSlice,
            chosenCategory: chosenCategorySlice,
            priceRange: priceRangeSlice,
            user: userSlice,
            product: productSlice,
            cart: cartSlice,
            textError: generalErrorSlice,
            purchases: purchasesSlice
      }
})
