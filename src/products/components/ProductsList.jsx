import { useSelector } from "react-redux"
import { ProductsCard } from "./";

export const ProductsList = () => {

      const products = useSelector( store => store.products );
      const chosenCategory = useSelector( store => store.chosenCategory );
      const priceRange = useSelector( store => store.priceRange );

      return (
           <>     
                  <div className="search__results">
                        <p className="category__results">Category: <span>{ chosenCategory }</span></p>
                        { priceRange && <p className="price__results">Price: <span>{ priceRange }</span></p>}
                  </div>

                  <ul className="products__grid">
                        {
                              products.length 
                              ? (
                                    
                                    products.map( product => (
                                          <ProductsCard 
                                                key={product.id} 
                                                { ...product }
                                          />
                                    ))
                                    
                              ) :
                              (
                                    <p className="no-results">There is no results</p>
                              )
                        }
                  </ul>
           </>
      )
}
