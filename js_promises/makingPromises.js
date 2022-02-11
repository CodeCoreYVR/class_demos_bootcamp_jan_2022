//What is a constructor?
//A constructor is meant to create objects
//We have a Promise constructor/class that makes new promise objects

//----Create new Promise with asynchronous function--->

const waitOneSecond = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('wait one second...')
        //we want to resolve something after setTimeout is completed
        resolve('I will build the house in 3 weeks') //with no resolve or reject, the promise will not do anything
        reject('The house is not built in 3 weeks')
    }, 1000)
    //resolve('I will build a house in 3 weeks)
})

waitOneSecond.then((data) => {
    console.log(data) //data is being the argument passed with the resolve
    //in here we do whatever we want to do after a promise is resolved
})
.catch((data) => {
    console.log(data)
    console.log('inside of .catch - promise failed')
})

//We must have a resolve or reject for promises to work
//When rejecting, there will need to be a .catch
//Promise will be completed if either resolved or rejected - only once

//3 Different states an instance of a Promise can be in...
//1) pending: the async action is still working in the background
//2) fullfilled: the promise has resolved to a good value
//3) rejected: the promise has resolved(finished) to a bad value - rejected





