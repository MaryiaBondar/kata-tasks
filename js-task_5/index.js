//1
let i = function(a, b, c){
    return (a-b) / c;
    }
    document.write(i(15, 3, 3)); 


//2
 let y = function her(a){
        return a*a;}
    document.write(y(6));

    let c = function her(b){
        return b*b*b;}
    document.write(c(6)); 

     
   //3  
    let u = function min(a, b) {
        return a < b ? a : b;
      }
      document.write(u(7,5));
    
      let s = function max(a, b) {
        return a > b ? a : b;
      }
      document.write(s(8,9)); */

   //5
      function isEven(num) {
        var x
        if (num % 2 == 0) {
          x = true;
        } else {
          x = false;
        }
        return x;
      
      }
      
      alert(isEven(10)); 
      
//6      
let arr = [1, 3, 5, 6, 8, 9, 10, 11, 15, 30];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
if (isEven(arr[i])) {
newArr.push(arr[i]);
}
}  console.log(newArr); 

//7
for (let u = 1; u <= 9; u++) {
	for (let r = 1; r <= u; r++) {
		document.write(u);
	}
	document.write('<br>');
}
