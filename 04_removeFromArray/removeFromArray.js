const removeFromArray = (array, ...itemToRemove) => {
    return array.filter(v => {
      return !itemToRemove.includes(v);
    });
};

/* 

function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }



const removeItems = (array, itemToRemove) => {
  return array.filter(v => {
    return !itemsToRemove.includes(v);
  });
}
*/

// Do not edit below this line
module.exports = removeFromArray;
