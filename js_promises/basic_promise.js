//A promise to do something in the future
//Has one of 2 outcomes:
//1) Completed (resolve)
//2) Failed (reject)

let p = new Promise((resolve, reject) => {
    //define what the promise is
    let a = 1 + 1;
    if (a == 2){
        resolve('success')
    } else {
        reject('fail')
    }
})

p.then((WinMessage)=> {
    console.log('This is in the then ->' + WinMessage)
}).catch((FailMessage) => {
    console.log('This is in the then ->' + FailMessage)
})



