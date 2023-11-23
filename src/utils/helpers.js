export const formatPrice = (price) =>{
    const RupeesAmount = new Intl.NumberFormat('en-IN', {
        style:'currency',
        currency:'INR',
    }).format((price / 100).toFixed(2));
    return RupeesAmount;
}

  export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if (type === 'colors') {
      unique = unique.flat()
    }
  
    return ['all', ...new Set(unique)]
  }