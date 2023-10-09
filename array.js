let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.pop()
// arr.push(10)

// arr.shift()
// arr.unshift(12)
// document.write(arr)

// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i],"<br>")
// }

// let i = 0;
// while (i<arr.length) {
//     console.log(arr[i])
//     i++
// }


// arr.map((items, index, arr) => {
//     console.log(items)
// })

// same as for loop :
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i],"<br>")
// }


// const newarr = arr.map((items, index, arr) => {
//     return items+2
// })

// const newarr = arr.filter((items, index, arr) => {
//     return items<10
// })

// const newarr = arr.reduce((prev, items, index, arr) => {
//     return prev+items
// }, 10)
// console.log(newarr)

// const result = arr.some((items, index, arr) => {
//     return items > 3
// })

// const result = arr.some((items, index, arr) => {
//     return items > 3
// })

// const result = arr.find((items, index, arr) => {
//     return items > 9
// })
// console.log(result)  

//------------spread operator-----------------//
// const num = [90,100,...arr, 11,12]
// console.log(num)

let arr2 = [1,2,3]
// let finalnum = []
// for (let i = 0; i < arr.length; i++) {
//     finalnum.push(arr[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//     finalnum.push(arr2[i]);
// }
// console.log(finalnum)


// const finalnum = [...arr2, ...arr]
// console.log(finalnum)


//-------------------Rest OPerator-----------------
// function sum(...numbers){
//     return numbers;
// }

// console.log(sum(arr2, arr, "5", "test", false, 19)) 


let arr3 = [12,34,56]
let arr4 = ["apple", "mango"]
const concarr = arr.concat(arr2, arr3, 12, arr4)
// console.log(concarr)


//-----------Splice cut out a range from a position to a count number------//
// const splicearr = concarr.splice(3,6, 100)
// console.log(splicearr, concarr)

//-----------slice cut out a range from a position to end position -1 ------//
// const slicearr = concarr.slice(0,2)
// console.log(slicearr, concarr)

//--------fill() replaces value by 10 from 2 position--------------
// const dummy = [2,3,5,1,3]
// dummy.fill(10,2)
// console.log(dummy)

//-------------findIndex(callback) find first index of item else -1 if not found----------//
 const dummy = [2,3,5,1,3]
const index = dummy.findIndex((item) => item === 0);
console.log(index)