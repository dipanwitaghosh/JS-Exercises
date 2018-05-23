// Task 1
console.log("external JS");

//Task 2
function sumArray (arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum += value;
    });
    return sum;
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([19,-2,30,-45]));

// Task 3
function checkEmail(emailString){
    var emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("dipa@ghosh.com"));
console.log(checkEmail("dipaghosh.info"));

//Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   function getReadingstatus(index){
       return library[index].readingStatus;
   }
   console.log(getReadingstatus(2));
   
   //Task 5
   `var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   //5 a
   function addItem(newItem){
       cart.push(newItem);
       console.log(cart);
   }
   var newItem = {name: "Watch", price: 64, quantity:1};
   addItem(newItem);