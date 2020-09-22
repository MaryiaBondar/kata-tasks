//task_1
/*
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//task_2

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i])
    }
}

//task_3

let arr2 = [],
    result = 0;
for (let i = 23; i < 58; i++) {
    arr2.push(i);    
}

let arr3 = [];
let i = 23;
while (i < 58) {
    arr3.push(i);
    i++;
}

for (let i=0 ; i < arr2.length; i++) {
    result +=arr2[i];
}
console.log(arr3)
console.log(arr2)
console.log(`sum = `+result)


// Task_4
let arr4 = [],
    arr3 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i <= arr3.length -1; i++) {   
    arr4.push(+arr3[i])
}
console.log(typeof arr4, arr4.filter(num=>['1','2','5'].includes(num.toString()[0])))

//task_5

let x = 'ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС',
    arr6 = x.split(', '),
    arr7 = [0],
    arr8 = [0];
for (let i = 0; i < arr6.length; i++) {
    arr7.push(arr6[i])
}
for (let i = 1; i < arr7.length - 2; i++) {
    arr8.push(arr7[i])
    document.write(`${arr8[i]}<br>`);
}
for (let i = 1; i <= arr7.length - 1; i++) {
    if (arr7.length - 1 == i || arr7.length - 2 == i)
        document.write(`<font color="red"><strong>${arr7[i]}</strong></font><br>`)
} 

//task_6

let myarr=[1, 2, 3, 4, 5];
    myarr.push(6)
    console.log(myarr)
    for (let i = 0; i < myarr.length; i++) {
        if (i<myarr.length-1) {            
        }
        else{
            console.log(myarr[i])
        }
        
    }
    */
   
    //task_7