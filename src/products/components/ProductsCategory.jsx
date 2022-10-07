import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useShow } from "../../hooks";
import { getCategoriesThunk } from "../../store/slices/categories.slice";
import { setChosenCategory } from "../../store/slices/chosenCategory.slice";
import { setPriceRange } from "../../store/slices/priceRange.slice";
import { getProductsByCategoryThunk, getProductsThunk } from "../../store/slices/products.slice";

export const ProductsCategory = () => {

      const dispatch = useDispatch();

      const categories = useSelector( store => store.categories );

      const { show, onChangeShow } = useShow();

      useEffect( () => {
            dispatch( getCategoriesThunk() );
      }, [] );

      const onGetAllProducts = () => {
            dispatch( setChosenCategory('All products') )
            dispatch( getProductsThunk() );
            dispatch( setPriceRange('') );
      }
      
      const onProductsByCategory = category => {
            dispatch( setChosenCategory(category.name) )
            dispatch( getProductsByCategoryThunk( category.id ) )
            dispatch( setPriceRange('') );
      }

      return (
            <li className={`${show && 'show'} aside__section`} >
                  <header  onClick={ onChangeShow }>
                        <h2>Categories</h2>
                        <i className={`bx bx-chevron-${ show ? 'up' : 'down'} aside__icon`}></i>
                  </header>
                              
                  <ul className="category__info">
                        <li
                              onClick={ () => onGetAllProducts() }
                              className="category__all"
                              >All Products</li>

                        {
                              categories.map( category => (
                                    <li   
                                          className="category__item"
                                          onClick={ () => onProductsByCategory(category) }
                                          key={category.id}>
                                          { category.name }
                                    </li>
                              ))
                        }
                  </ul>
            </li>
      )
}
