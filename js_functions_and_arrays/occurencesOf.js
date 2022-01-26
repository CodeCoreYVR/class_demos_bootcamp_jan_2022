function occurencesOf(char, str){ 
    let count = 0;

    for (let i=0; i< str.length; i++){
        //Alternative: for (let i=1; i<= str.length; i++)
        if(char === str[i]){
            count += 1 //same as: count = count + 1 // same as count++
            //count += 2 // count = count + 2 // this is not the same as count++
        }
    }
    return count
}

console.log(occurencesOf("l","hello world"))
console.log(occurencesOf(" ","bob likes tea"))
console.log(occurencesOf("c","this is this"))



