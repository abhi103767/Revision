console.log('Hii');
setTimeout(() => {
    console.log('how are you');
}, 1000);

console.log('Bye')

// Tricker one 
let count = 0;
for(let i = 1; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
        count++;
    },1000);
    console.log(count)

}