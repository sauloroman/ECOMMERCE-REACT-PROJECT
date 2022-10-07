import {  useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { PurchaseItem } from "../components/PurchaseItem";


export const PurchasesPage = () => {

      const purchases = useSelector( store => store.purchases );

      return (
            <div className="purchases">

                  <header className="product__header">
                        <Link className="return" to="/">Home</Link>
                        <div className="product__title">
                              <div className="point"></div>
                              <p>Purchases</p>
                        </div>
                  </header>

                  {
                        purchases.map( purchase => (
                              <PurchaseItem 
                                    key={ purchase.id }
                                    { ...purchase }
                              />
                        ))
                  }
            </div>
      )
}
