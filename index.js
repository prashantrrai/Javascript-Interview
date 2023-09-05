
//String 
//Number 
//Boolean 
//Arrya 
//Object 
//Null 
//Undefined

// let arr = [23,4]
// let b = {
//     name: "Nishangt",
//     roll_no: 23,
//     age: 31,
//     hobbies: ["singing", "dancing", "coding"],
//     qualication: {
//         matriculation: "OSEM",
//         higher: "kamla mehta"
//     }
// }
// document.write(b.hobbies[2])
// document.write(typeof(1))

// let a = 3
// let b = 2
// document.write(a%=b)
// console.log(document)

// console.log(document.getElementsByClassName("brand"))

// (false)?console.log("Success"):console.log("Failure")
// var day = 1
// switch (day) {
//     case 0:
//         document.write("Today is Monday")
//         break;
//     case 1:
//         document.write("Today is Tuesday")
//         break;
//     case 2:
//         document.write("Today is wednesday")
//         break;
//     case 3:
//         document.write("Today is Thursday")
//         break;
//     case 4:
//         document.write("Today is Friday")
//         break;
//     case 5:
//         document.write("Today is Saturday")
//         break;
//     default:
//         document.write("enter proper day")
//         break;
// }

// ((xyz)=>{
//     return document.write(xyz)
// })("hello")

// (function(a,b) {
//     return document.write(a+b)
// })(2,3)

// let a =4;
// (function (){
//     var a =3;
//     console.log(a)
// })()
// console.log(a)

// num=0
// while (num<10){
//     document.write(`${num}   HEllo Yahoo baba<br>`)
//     num++
// }

// for (i=1 ; i<11; i++){
//     if(i==6){
//         continue
//     }
//     document.write(`10 X ${i} = ${10*i} <br>`)
// }

//Star Pattern in Javascript
let n = 10
for (i=1 ; i<n; i++){
    for(s=1; s <n-i; s++){
        document.write(`&nbsp;`)
    }
    for(j=1; j<i+1; j++){
        document.write(`*`)
    }
    document.write(`<br>`)
}