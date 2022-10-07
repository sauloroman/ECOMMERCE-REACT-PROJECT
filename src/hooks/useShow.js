import { useState } from "react"

export const useShow = () => {

      const [show, setShow] = useState(false)

      const onChangeShow = () => setShow(!show);

      return {
            show,
            onChangeShow,
      }
}
