import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

      const [formState, setFormState] = useState(initialForm);
      const [error, setError] = useState(false);

      const onInputChange = ({target}) => {

            const { name, value } = target;
            
            setFormState(
                  {
                        ...formState,
                        [name]: value
                  }
            )

      }

      const onResetForm = () => setFormState( initialForm );

      const onDetectEmptyFields = () => {
            if ( Object.values(formState).includes('') ) {
                  setError( true );

                  setTimeout( () => {
                        setError( false );
                  }, 3000 );

                  return true;
            }

            setError( false );

            return false;
      }

      const onDetectError = () => setError(true);

      const onRemoveError = () => setError( false );


      return {
            ...formState,
            formState,
            onInputChange,
            onResetForm,
            onDetectEmptyFields,
            error,
            onDetectError,
            onRemoveError
      }

}
