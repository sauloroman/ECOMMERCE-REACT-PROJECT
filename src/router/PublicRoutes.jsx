import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {

      const token = useSelector( store => store.user.token );

      return ( !token )
            ? ( children )
            : (   <Navigate to="/" /> )

}
