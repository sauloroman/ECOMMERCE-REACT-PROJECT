import { useEffect } from "react"
import { useDispatch } from "react-redux";

import { getProductsThunk } from "../../store/slices/products.slice";

import { ProductsList } from "../components";
import { AsideBar } from "../../ui/components";

export const ProductsPage = () => {

      const dispatch = useDispatch();

      useEffect( () => {
            dispatch( getProductsThunk() );
      }, [] );

      return (
            
            <div className="products">
                  <AsideBar />

                  <main>
                        <ProductsList />
                  </main>
            </div>
            
      )
}
