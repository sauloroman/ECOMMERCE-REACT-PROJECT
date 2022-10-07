import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useGoPage } from "../../hooks";
import { setTextError } from "../../store/slices/generalError.slice";
import { createUserThunk } from "../../store/slices/user.slice";
import { Error } from "../../ui/components";

export const SignUpPage = () => {

      const dispatch = useDispatch();

      const textError = useSelector( store => store.textError );

      const { formState, email, firstName, lastName, password, phone, onInputChange, onDetectEmptyFields, onResetForm, onDetectError, onRemoveError, error } = useForm(
            {
                  email: '',
                  firstName: '',
                  lastName: '',
                  password: '',
                  phone: '',
                  role: 'normal'
            }
      );
      const { onGoPage } = useGoPage();

      const [errorText, setErrorText] = useState('');

      const onLoginPage = () => {
            onGoPage('/login');
      }

      const onRegisterUser = e => {
            
            e.preventDefault();

            if ( onDetectEmptyFields() ) {
                  setErrorText('All fields are needed');
                  return;
            }

            dispatch( createUserThunk( formState ) )
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
                  onLoginPage();
            }

      }

      return (
            <div className="signup">
                  <div className="signup__box">
                        
                        <h2>Sign up!</h2>

                        <form 
                              onSubmit={ onRegisterUser }
                              className="form">

                              <div className="form__field">
                                    <label htmlFor="email">Email</label>
                                    <input     
                                          value={ email }
                                          onChange={ onInputChange }
                                          autoComplete="off"
                                          id="email"
                                          name="email"
                                          type="email" />
                              </div>
                              <div className="form__field">
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                          value={ firstName }
                                          onChange={ onInputChange }    
                                          autoComplete="off"
                                          id="firstName"
                                          name="firstName"
                                          type="text" />
                              </div>
                              <div className="form__field">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input    
                                          value={ lastName }
                                          onChange={ onInputChange }
                                          autoComplete="off"
                                          id="lastName"
                                          name="lastName"
                                          type="text" />
                              </div>
                              <div className="form__field">
                                    <label htmlFor="password">Password</label>
                                    <input
                                          value={ password }
                                          onChange={ onInputChange }     
                                          autoComplete="off"
                                          id="password"
                                          name="password"
                                          type="password" />
                              </div>
                              <div className="form__field">
                                    <label htmlFor="phone">Phone (10 numbers)</label>
                                    <input 
                                          value={ phone }
                                          onChange={ onInputChange }     
                                          autoComplete="off"
                                          id="phone"
                                          name="phone"
                                          type="tel" />
                              </div>

                              {
                                    error && <Error>{ errorText }</Error> 
                              }

                              <button 
                                    type="submit"
                                    className="button">Sign Up</button>
                        </form>

                        <p 
                              onClick={ onLoginPage }
                              className="signup__info">Already have an account? <span>Log in</span></p>
                  </div>      
            </div>
      )
}
