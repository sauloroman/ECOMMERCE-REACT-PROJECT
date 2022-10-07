import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
      const token = useSelector( store => store.user.token );

      return ( token )
            ? ( children )
            : (   <Navigate to="/login" /> )
}
