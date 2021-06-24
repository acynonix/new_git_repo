var arr = ["Maharashtra", "Punjab", "Delhi", "Assam"]
console.log(arr[0]);
arr.pop();
console.log(arr);

arr.unshift("AddingThis");
console.log(arr);

arr.shift();
console.log(arr);
console.log(arr.indexOf("Assam"));  //Assam by now does'nt exist

