let arr=[1,2,3,4,5];
let newArr=arr.splice(5,1,"added");

let returnedEle=arr.push(10);
returnedEle=arr.pop();
returnedEle=arr.sort();
returnedEle=arr.reverse();

const x=arr.sort(function sort(a,b){
    return b-a;
})

console.log(x);
console.log(returnedEle);
console.log(newArr);
console.log(arr);