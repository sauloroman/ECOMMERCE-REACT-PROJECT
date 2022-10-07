import { useDispatch } from "react-redux";
import { useCounter, useGoPage } from "../../hooks"
import { deleteProductOnCartThunk, updateProductOnCartThunk } from "../../store/slices/cart.slice";

export const CartCard = (
      {
            id, 
            title,
            price,
            productsInCart,
            brand
      }
) => {

      const dispatch = useDispatch();

      const { onGoPage } = useGoPage();

      const onRemoveProduct = () => {
            dispatch( deleteProductOnCartThunk( id ) );
      }

      const onUpdateProduct = (value) => {

            if (!(productsInCart.quantity + value) ) {
                  dispatch( deleteProductOnCartThunk( id ) )
                  return;
            }    

            const product = {
                  id,
                  newQuantity: productsInCart.quantity + value
            }


            dispatch( updateProductOnCartThunk( product ) )
      }

      return (
            <div className="product__onCard">

                  <h4 onClick={ () => onGoPage(`/product/${id}`) }>{ title } / { brand }</h4>

                  <div className="product__onCardInfo">
                        <div className="cart__update">
                              <button onClick={ () => onUpdateProduct(1) }>+</button>
                              <p>{ productsInCart.quantity }</p>
                              <button onClick={ () => onUpdateProduct(-1) }>-</button>
                        </div>
                        <p>Price: $ {price}</p>
                        <p className="product__onCardPrice">Subtotal: <span>$ { price * productsInCart.quantity }</span></p>
                  </div>

                  <div className="card__buttonBox">
                        <button 
                              onClick={ onRemoveProduct }
                              className="card__button">
                              <i className='bx bxs-trash-alt'></i>
                        </button>
                  </div>
            </div>
      )
}
