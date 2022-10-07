export const getPriceRange = ( products, min, max ) => {
      return products.filter( product => Number(product.price) >= min && Number(product.price) <= max );
}
