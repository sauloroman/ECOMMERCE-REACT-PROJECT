import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTotal, showCart } from "../../helpers"
import { useGoPage } from "../../hooks";
import { onSetCart } from "../../store/slices/cart.slice";
import { postPurchasesThunk } from "../../store/slices/purchases.slice";
import { CartCard } from "./";

export const Cart = () => {

      const dispatch = useDispatch();
      const productsOnCart = useSelector( store => store.cart );

      const { onGoPage } = useGoPage();

      const [total, setTotal] = useState(0);

      useEffect( () => {
            setTotal( getTotal( productsOnCart ) )
      }, [productsOnCart] );

      const onPostPurchases = () => {

            const address = {
                  street: "Gravitación",
                  colony: "Real del sol",
                  zipCode: 20196,
                  city: "Aguascalientes, México",
                  references: "Some references"
            }
      

            dispatch( postPurchasesThunk( address ) );
            dispatch( onSetCart([]) )
            onGoPage('/purchases');
      }

      return (
            <div className="cart">
                  <header className="cart__header">
                        <h2>Tu carrito</h2>
                        <i 
                              onClick={ showCart }
                              className='bx bx-x cart__icon'></i>
                  </header>

                  <div className="cart__products">
                        <div className="products-on-card">

                              {
                                    productsOnCart.map( productOnCard => (
                                          <CartCard
                                                key={ productOnCard.id }
                                                { ...productOnCard }
                                          />
                                    ))
                              }

                        </div>
                  </div>

                  <div className="cart__info">
                        <h2>Total: </h2>
                        <p>$ { total }</p>
                  </div>
                              
                  {
                        productsOnCart.length && (
                              <button 
                                    onClick={ onPostPurchases }
                                    className="button">Comprar</button>

                        )
                  }

            </div>
      )
}
