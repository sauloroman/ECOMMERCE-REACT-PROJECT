export const getTotal = ( products ) => {
      return  products.reduce( (total, product) => total + (Number( product.price ) * product.productsInCart.quantity ), 0)
            
}
