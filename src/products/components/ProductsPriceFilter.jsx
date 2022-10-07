import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/slices/products.slice";
import { setPriceRange } from "../../store/slices/priceRange.slice";

import { Error } from "../../ui/components";

import { getMinAndMaxPrice, getPriceRange } from "../../helpers";
import { useForm, useShow } from "../../hooks";


export const ProductsPriceFilter = () => {

      const dispatch = useDispatch();

      const products = useSelector( store => store.products );

      const { show, onChangeShow } = useShow();

      const { min, max, onInputChange, onResetForm, onDetectEmptyFields, error, onDetectError, onRemoveError } = useForm(
            {
                  min: '',
                  max: ''
            }
      )


      const [errorText, setErrorText] = useState('')

      const { minPrice, maxPrice } = useMemo( () => getMinAndMaxPrice( products ), [ products ]);

      const onFilterPrice = e => {

            e.preventDefault();

            if ( onDetectEmptyFields() ) {
                  setErrorText('All fields are needed');
                  return;
            }

            if ( Number( max ) <= Number( min ) ) {
                  setErrorText('Min is greater than Max')
                  onDetectError();

                  setTimeout(() => {
                        onRemoveError();
                  }, 3000 );

                  return;
            }

            dispatch( setProducts( getPriceRange( products, Number(min), Number(max) ) ) );
            dispatch( setPriceRange(`$${min} - $${max}`) )

            onResetForm();

      }

      return (
            <li className={`${show && 'show'} aside__section`} >
                  <header onClick={ onChangeShow }>
                        <h2>Price</h2>
                        <i className={`bx bx-chevron-${ show ? 'up' : 'down'} aside__icon`}></i>
                  </header>

                  <form 
                        onSubmit={ onFilterPrice }
                        className="category__info form">
                        <div className="form__field">
                              <label htmlFor="">Min</label>
                              <input      
                                    value={ min }
                                    onChange={ onInputChange }
                                    name="min" 
                                    type="number" 
                                    min={minPrice} 
                                    max={maxPrice} 
                              />
                        </div>   
                        <div className="form__field">
                              <label htmlFor="">Max</label>
                              <input 
                                    value={ max }
                                    onChange={ onInputChange }
                                    name="max"
                                    type="number" 
                                    min={minPrice} 
                                    max={maxPrice} 
                              />
                        </div>    
                        <button className="button">Filter Price</button>
                  </form>

                  {
                       error && <Error>{ errorText }</Error> 
                  }

            </li>
      )
}
