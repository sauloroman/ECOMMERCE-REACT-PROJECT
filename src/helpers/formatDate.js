export const formatDate = (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const myDateVar= new Date( date )
      return myDateVar.toLocaleDateString(undefined, options)
}
