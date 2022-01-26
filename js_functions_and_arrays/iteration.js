arr = ['a', 'b', 'c']

//regular for loop
//This is when you need the index

for (let i = 0; i < arr.length; i++){
    //i = 1; i <= arr.length; i++
    //i = 1; 1 < arr.length - 1; i++
    console.log('index:', i, "value:", arr[i] )
}

//for... of loop
for (let value of arr){
    console.log("value:", value)
}

