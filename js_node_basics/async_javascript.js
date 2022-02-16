function a() {
    console.log('a')
}
function b() {
    console.log('b')
}
function c() {
    console.log('c')
}



a();

setTimeout(() => {
    console.log("Wait 2 seconds")
}, 2000)

c();

b();

