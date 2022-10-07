export const getRelatedProducts = (category, products, id) => {
      return products.filter( product => (product.category.name === category) && (product.id !== id) );
}
