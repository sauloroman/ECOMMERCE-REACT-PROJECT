import { useDispatch, useSelector } from 'react-redux';
import { useGoPage } from '../../hooks'

export const ProductsCard = ({
      title,
      price,
      productImgs,
      id,
}) => {

      const { onGoPage } = useGoPage();

      const user = useSelector( store => store.user.user );

      return (
            <li className='products__card animate__animated animate__fadeIn'>

                  <figure 
                        onClick={ () => onGoPage(`/product/${id}`) }
                        className='product__card-image'>
                        <img 
                              src={ productImgs[0] } 
                              alt="Main product image" 
                        />
                        <div className='product__card-image-2'>
                              <img 
                                    src={ productImgs[1] } 
                                    alt="Secondary product image" />
                        </div>
                  </figure>
                  
                  <div className="products__card-info">
                        <div className='product__card-info1'>
                              <p>Product</p>
                              <h3>{ title }</h3>
                        </div>
                        <div className='product__card-info2'>
                              <div className='product__card-price'>
                                    <p>Price</p>
                                    <h3>$ { price }</h3>
                              </div>

                              {
                                    user?.id && (
                                          <button 
                                                onClick={ () => onGoPage(`/product/${id}`) }
                                                className='product__card-button button'>
                                                <i className='bx bxs-shopping-bag'></i>
                                          </button>
                                    )
                              }

                        </div>
                  </div>

            </li>
      )
}
