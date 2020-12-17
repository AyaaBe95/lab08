

function run(){

  test()
  welcome()
  showBook()  
  
}

function test(){
  let input2= prompt("Please enter re-write this word (books) to make sure you are not a robot ")

  while(input2 !== 'books'){
    input2= prompt("enter the right word (books) ")
  }
}




function welcome(){
  let  person = prompt("Please enter your name");

  if (person != null) {
    alert("welcome " + person + " in our library ")}
  
    else {
        alert (" welcome Mr.nobody in our library");
    }


}

let getBook = function(){
  let book ="<img src= 1.png>"
  
  return book;
}



let howMany = function (){
  
let count=prompt("How many books do you want ?")

while(count === "" || isNaN(count)) {
  count = prompt("Please enter the number of books do you want!!");

}
return count;

}

let showBook = function() {
  let book1 = getBook();
  let total = howMany();
  let result = "";

  for(let i = 0; i < total; i++) {
    result = result + '<p>book number #' + i + " " + book1 + '</p>'
  }

  alert("Please scroll down to see your book/s");
  return result;
}

run();


