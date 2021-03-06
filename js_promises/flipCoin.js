function flipCoin() {
    return new Promise((resolve, reject) => {
        const side = Math.floor(Math.random() * 2) // 1 or 0
         //1 will represent tails
         //0 will represent heads
        if (side === 1){ //the values of 1 vs 0 would return true or false in JS. So side represents a boolean value in this case
            resolve('tails')
        } else {
            reject('heads')
        }
    })
}


flipCoin().then((value) => {
    console.log('Success ' + value)
})
.catch((value) => {
    console.log('Fail ' + value)
})

