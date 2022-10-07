import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const UserPage = () => {

      const user = useSelector( store => store.user.user );

      return (
            <div className="userpage">

                  <div className="userpage__cart">
                        <div className="userpage__img">
                              <i className='bx bxs-user-circle' ></i>
                        </div>

                        <div className="userpage__info">

                        <header className="userpage__header">
                                    <h2>Tu información</h2>
                                    <hr />
                        </header>

                              <ul className="userpage__list">

                                    <li className="userpage__item">
                                          <p className="userpage__label">Nombre Completo: </p>
                                          <p>{ user.firstName } { user.lastName }</p>
                                    </li>

                                    <li className="userpage__item">
                                          <p className="userpage__label">Email: </p>
                                          <p>{ user.email }</p>
                                    </li>

                                    <li className="userpage__item">
                                          <p className="userpage__label">Phone: </p>
                                          <p>{ user.phone }</p>
                                    </li>

                                    <li className="userpage__item">
                                          <p className="userpage__label">Status: </p>
                                          <p>{ user.status === 'available' && 'disponible' }</p>
                                    </li>

                              </ul>

                              <Link className="userpage__purchases" to="/purchases">Ver compras &rarr;</Link>

                        </div>
                  </div>

            </div>
      )
}
