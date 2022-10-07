import { useNavigate } from "react-router-dom";

export const useGoPage = () => {
    
      const navigate = useNavigate();

      const onGoPage = page => {
            navigate( page )
      }

      return {
            onGoPage
      }
}
