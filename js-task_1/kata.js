function greet(name){
  return "Hello, " + name + " how are you doing today? "
}

const areaOrPerimeter = function(l , w) {
    if(l==w) {
      return l*w
    }
    else {
      return 2*(l+w)
    }
};

function dutyFree(normPrice, discount, hol){ 
    const priceWithDiscount = normPrice - (normPrice * 0.1);
    return Math.floor((normPrice - priceWithDiscount) * hol);
  }