

let arr=[1,2,3,0,4,5,6,9,4,5,8];
let res;

res=arr.includes(5);//true
res=arr.includes(4,2);//true
res=arr.includes(1,2);//false


res=arr.join("");//123456
res=arr.join('-');//1-2-3-4-5-6

res=arr.indexOf(4);//3
res=arr.indexOf(7);//-1
res=arr.indexOf(1,2)//-1

res=arr.lastIndexOf(4);//6
res=arr.lastIndexOf(4,2);//-1
res=arr.lastIndexOf(4,1);//-1
res=arr.lastIndexOf(4,0);//-1
res=arr.lastIndexOf(4,3);//-1


console.log(res);
console.log(arr);