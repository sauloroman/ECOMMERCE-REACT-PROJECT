import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk } from "../../store/slices/product.slice";
import { getProductsThunk } from "../../store/slices/products.slice";
import { ProductsCard } from '../components';
import { getRelatedProducts, showCart } from '../../helpers';
import { CarouselProduct } from "../../ui/components";
import { postProductOnCartThunk } from "../../store/slices/cart.slice";
import { useCounter } from "../../hooks";

export const ProductPage = () => {

      const dispatch = useDispatch();
      const { id } = useParams();
      
      const product = useSelector( store => store.product );
      const products = useSelector( store => store.products );
      const user = useSelector( store => store.user.user );
      const cart = useSelector( store => store.cart );
      
      const existence = cart.some( product => product.id === Number(id) );
      
      const { counter, increment, decrement, reset } = useCounter();
      const [relatedProducts, setRelatedProducts] = useState([]);

      useEffect( () => {
            dispatch( getProductThunk( id ) );
            dispatch( getProductsThunk() );
      }, [] )

      useEffect( () => {
            dispatch( getProductThunk( id ) );
      }, [id])

      useEffect( () => {
            setRelatedProducts( getRelatedProducts( product.category, products, product.id ) )
      }, [ product ] );

      const onAddProduct = () => {

            const newProduct = {
                  id: id,
                  quantity: counter
            }

            dispatch( postProductOnCartThunk( newProduct ) );
      }

      useEffect( () => {
            reset();
      }, [id] )


      return (
            <div className="product container">

                  <header className="product__header">
                        <Link className="return" to="/">Home</Link>
                        <div className="product__title">
                              <div className="point"></div>
                              <p>{ product.title }</p>
                        </div>
                  </header>

                  <div className="product__container">
                        <div className="product__gallery">
                              <CarouselProduct productImgs = { product.productImgs }/>
                        </div>

                        <div className="product__info">

                              <h2>{ product.title }</h2>

                              <p className="product__description">{ product.description }</p>

                              {
                                    !existence ? (
                                          <>
                                                <div className="product__priceBox">

                                                      <div className="product__price">
                                                            <p>Price</p>
                                                            <p>$ { product.price }</p>
                                                      </div>
                  
                                                      {
                                                            user?.id && (
                                                                  <div className="product__quantity">
                                                                        <p>Quantity</p>
                                                                        <div className='product__controls'>
                                                                              <button 
                                                                                    onClick={ () => decrement(1) }
                                                                                    className='button'> &minus; </button>
                                                                              <p> { counter } </p>
                                                                              <button 
                                                                                    onClick={ () => increment(1) }
                                                                                    className='button'> &#43; </button>    
                                                                        </div>
                                                                  </div>
                                                            )
                                                      }
                  
                                                </div>
            
                                                {
                                                      user?.id && (
                                                            <button 
                                                                  onClick={ onAddProduct }
                                                                  className='button btn--addCard'>
                                                                  <p>{ existence ? 'Ya está en el carrito' : 'Agregar al carrito'}</p>
                                                                  <i className='bx bxs-cart btn--icon'></i>
                                                            </button>
                                                      )
                                                }
                                          </>
                                    ) : (
                                          <p className="alert alert-info">
                                                Este artículo ya está en el <span className="open__cart" onClick={ showCart }>carrito</span>
                                          </p>
                                    )
                              }

                             
                        </div>
                  </div>

                  <div className="relatedProducts__container">

                        <h2>Descubre productos similares</h2>

                        <ul className="relatedProducts__grid">
                              {
                                    relatedProducts.map( product => (
                                          <ProductsCard 
                                                key={ product.id }
                                                { ...product }
                                          />
                                    ))
                              }
                        </ul>

                  </div>

            </div>
      )
}
