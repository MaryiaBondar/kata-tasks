// //task_1
// function name(a, b, c) {

//     return (a - b) / c
// }
// console.log(name)
// console.log(name(6,2,2))

//  //task_2
// function name(a) { 
//     return ` Куб числа равен: ${Math.pow(a,3)}`
// }
//     console.log(name(3))

// function name(a) { 
//     return ` Квадрат числа равен: ${Math.pow(a,2)}`
// }
//     console.log(name(4))

//task_3

// function min(a,b) {
//     if (a<b) {
//         return `Меньшее A=${a}`        
//     }else if (a>b){
//         return `Большее А=${a}`
//     }    
// }
// function max(a,b) {
//     if (b<a) {
//         return `Меньшее B=${b}`        
//     }else if (b>a){
//         return `Большее B=${b}`
//     }    
// }
// console.log(min(3,2))
// console.log(max(3,2))


// //task_4

// function name() {
//     let arr = [],
//         start = +prompt('Start'),
//         end = +prompt('End');

//     while (start < end) {
//         arr.push(start);
//         start++;
//     }
//     console.log(arr)
// }
// name()

// //task_5

// function siEven(a) {
//     if (a%2) {
//         return false        
//     } else {
//         return true
//     }    
// }
// console.log(siEven(+prompt()))

// //task_6
// function arr(a) {
//     let arr1=[];
//     let arr2=[];
//     for (let i = 0; i < 20; i++) {
//         arr1.push(i)          
//         if (siEven(arr1[i])) {
//             arr2.push(i)            
//         }
//     }    
//     console.log(arr1)
//     console.log(arr2)    
// }
// arr()

// //Task_7 (не сделал)

// //task_8

// function recArrey(params) {
//     console.log(params[i]);
//     i++;
//     if (i < params.length)  {
//         recArrey(params)}
// }
// let i = 0;
// recArrey([2, 5, 7, 8, 3, 2, 5, 7, 3, 1, 5, 3])



//kata_9 

function domainName(url){
    x=url.replace('http://').replace('https://').replace('www.').replace('.com',).replace('.ru').replace('.com').replace('.co.jp',).split('undefined').slice(1, -1);
     x=''+x
     return x
   }