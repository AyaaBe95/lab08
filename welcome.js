



function run(){

  welcome()
  questions()
  Continue()
}


function welcome(){
  let  person = prompt("Please enter your name");

  if (person != null) {
    alert("welcome " + person + " in our library ")}
  
    else {
        alert (" welcome Mr.nobody in our library");
    }


}

function questions(){
 let userInput = prompt("Do you love reading ? (yes / no ");

  if (userInput == "yes"){
    alert("We wish you find what do you want to read")}
    else if (userInput == "no"){
      alert("Reading strengthens the mind,try to read a book to nourish your mind")
    }
    else {
      alert ("Unknown")
    }
}


  function Continue(){

if (confirm("Press a button! to continue")) {
   alert( "You pressed OK!");
  } else {
    alert( "You pressed Cancel!");
  }
}

run()


