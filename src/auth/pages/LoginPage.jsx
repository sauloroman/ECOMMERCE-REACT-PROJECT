import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useGoPage } from "../../hooks";
import { setTextError } from "../../store/slices/generalError.slice";
import { LoginUserThunk } from "../../store/slices/user.slice";
import { Error } from "../../ui/components";

export const LoginPage = () => {

      const dispatch = useDispatch();

      const textError = useSelector( store => store.textError );

      const { formState, email, password, onInputChange, onResetForm, onDetectEmptyFields, error, onDetectError, onRemoveError } = useForm(
            {
                  email: '',
                  password: ''
            }
      )
      const { onGoPage } = useGoPage();

      const [errorText, setErrorText] = useState('')

      const onSignUpPage = () => {
            onGoPage('/signup')
      }

      const onLogin = e => {

            e.preventDefault();

            if ( onDetectEmptyFields() ) {
                  setErrorText('All fields are needed');
                  return;
            };

            dispatch( LoginUserThunk( formState ) );
            onResetForm();
            
            if ( textError ) {
                  setErrorText( textError );
                  onDetectError();

                  setTimeout(() => {
                        onRemoveError();
                        dispatch( setTextError('') )
                  }, 3000 );

                  return;

            } else {
                  onGoPage('/')
            }
      }

      return (
            <div className="login">
                  <div className="login__box">
                        <p className="login__description">
                              Welcome! Enter your email and password to continue
                        </p>

                        <p className="login__info">
                              You have to Log In to access to your cart
                        </p>

                        <div className="login__data">
                              <div className="login__dataContainer">
                                    <h2>Test Data</h2>
                                    <div className="login__iconBox">
                                          <i className='bx bxs-envelope'></i>
                                          <p>sauloromansantillannava1998@correo.com</p>
                                    </div>
                                    <div className="login__iconBox">
                                          <i className='bx bxs-lock-alt' ></i>
                                          <p>saulo007</p>
                                    </div>
                              </div>
                        </div>

                        <form 
                              onSubmit={ onLogin }
                              className="form">
                              <div className="form__field">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                          value={ email }
                                          onChange={ onInputChange }
                                          autoComplete="off"
                                          type="email" 
                                          id="email" 
                                          name="email"/>
                              </div>

                              <div className="form__field">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                          value={ password }
                                          onChange={ onInputChange }
                                          autoComplete="off"
                                          type="password" 
                                          id="password" 
                                          name="password"/>
                              </div>

                              {
                                    error && <Error>{ errorText }</Error> 
                              }

                              <button 
                                    type="submit"
                                    className="button">
                                    Login
                              </button>
                        </form>

                        <p 
                              onClick={ onSignUpPage }
                              className="login__info">Don't have an account? <span>Sign up</span></p>
                  </div>
            </div>
      )
}
