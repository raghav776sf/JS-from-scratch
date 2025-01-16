const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString)
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

const customizeDate = new Date(1997, 8, 20);
// console.log(customizeDate.toDateString());

 const mycreatedDate = new Date("1997-08-20");


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
