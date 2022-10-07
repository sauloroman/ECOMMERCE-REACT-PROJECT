import { ProductsCategory, ProductsPriceFilter } from "../../products/components";

export const AsideBar = () => {

      return (
            <aside className="aside">

                  <ul className="aside__container">
                        <ProductsPriceFilter />
                        <ProductsCategory />
                  </ul>

            </aside>
      )
}
