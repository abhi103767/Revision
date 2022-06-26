// this value refers the window object if directly called by here
// console.log(this);



// this will refer to global object;
// function number(){
//     console.log(this);
// }



//this will refer to this object;
let obj = {
    c : 4,
   abhi :  function(){
  console.log(this.c);
   }
}


// There are two binding for this // implicit Binding

// what is implicit Binding 
// Ans The value of this bound of specific object;


// Explicit Binding
// when we are forcing function to use certain object
// this explicit Binding where function are forcing to use certain object;
function displayName (){
    console.log(this.name);
}
let myProfile = {
    name : 'Avinash'
}
let myFriendProfile = {
    name : 'Abhishek'
}

displayName.call(myProfile);
displayName.call(myFriendProfile);



const myData = {
    name: 'Rajat',
    city: 'Delhi',
    displayStay: function () {
      console.log(this.name, 'stays in', this.city)
    },
  }
  myData.displayStay()
  
  // create an object yourData and try to use displayStay
  const yourData = {
   name: 'Avinash',
   city: 'Gwalior'
  }
  
  
  // answer
  myData.displayStay.call(yourData)



// difference between arrow and parent function because of this.

let arrow = {
    a : 1,
   arrowcall : function() {
    return () => {
        console.log(this)
    }
   }
}
console.log(this)

arrow.arrowcall()()
