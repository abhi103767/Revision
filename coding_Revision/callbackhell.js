


function callbackHell() {
     setTimeout(() => {
  console.log('firstCallback');

  setTimeout(() => {
    console.log('you are in the second callback')

    setTimeout(() => {
        console.log("You are in the third callback");
    },1000)
  },1000)
     },1000);
     
}



// callbackHell()


// solution is the Promise chaining for this


const promise1 = new Promise((res,rej) => {
   setTimeout(() => {
    res('First Promise')
   },1000);
})
const promise2 = new Promise((res,rej) => {
    setTimeout(() => {
     res('Second Promise')
    },1000);
 })
 const promise3 = new Promise((res,rej) => {
    setTimeout(() => {
     res('Third Promise')
    },1000);
 })
 
 promise1.then((res) => {
    console.log(res)
    promise2.then((res) => {
        console.log(res);
        promise3.then((res) => {
            console.log(res);
        })
    })
 });


