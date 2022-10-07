export const getMinAndMaxPrice = products => {

      const prices = products.map( product => Number(product.price) );
      let maxPrice = prices[0];
      let minPrice = prices[0];

      for ( let i = 0; i < prices.length; i++ ) {
            if ( prices[i] >= maxPrice ) maxPrice = prices[i];
            if ( prices[i] <= minPrice ) minPrice = prices[i]; 
      }
      
      return { minPrice, maxPrice }
}
