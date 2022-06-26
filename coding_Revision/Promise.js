// Promise gives way of handling asynchrounous operation
// if async opreation is success then it gives result 
// other wise if it is failed then throw error

const promise = new Promise((res,err) => {
const value = false;
if(value) res('Promise is resolved');
else err('Promise is not resolved');

})
promise.then((res) => console.log(res))
.catch((err) => console.log(err))


// littlebit complicated

const newPromise = new Promise((res,rej) => {
let value = false;
  
    res(() => {
     if(value) return 'new Promise is resolved';
    return rej(() => 'new Promise is not resolved' )
    });
   
    
    
})

newPromise.then(res => console.log(res()))
.then((res) => console.log(res))
.catch((err) => console.log(err))

