import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { showCart } from "../../helpers"  
import { setUser } from "../../store/slices/user.slice";

export const Navigation = () => {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const user = useSelector( store => store.user.user );

      const onLogOutUser = () => {
            dispatch( setUser({}) );
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/', {
                  replace: true
            })
      }

      return (
           <nav className="navigation">            

                  <div className="navigation-1">
                        <p>
                              <Link to="/" className="navigation__main">e&mdash;commerce</Link>
                        </p>
                  </div>

                  <ul className="navigation-2">
                        {
                              user?.id ? (
                                    <>
                                          <li>
                                                <button 
                                                      onClick={ showCart }
                                                      className="navigation__button">
                                                            <i className='bx bxs-cart' ></i>
                                                </button>
                                          </li>
                                          <li>
                                                <NavLink className="navigation__item" to="/user"><i className='bx bxs-info-circle'></i></NavLink>
                                          </li>
                                          <li>
                                                <NavLink className="navigation__item" to="/purchases"><i className='bx bxs-purchase-tag-alt' ></i></NavLink>
                                          </li>
                                          <li>
                                                <button 
                                                      onClick={ onLogOutUser }
                                                      className="navigation__item">
                                                            <i className='bx bxs-exit'></i>
                                                </button>
                                          </li>
                                    </>
                              ) : (
                                    <li>
                                          <NavLink className="navigation__item" to="/login"><i className='bx bxs-user'></i></NavLink>
                                    </li>
                              )
                        }
                  </ul>

           </nav>
      )
}
