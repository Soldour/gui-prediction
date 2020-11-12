let {PythonShell} = require('python-shell')
const path = require('path');

function newPridiction(){


  let pyInput ={
      scriptPath : path.join("../Back-End/")
      // pyPaht :path.join( '/../BackEnd/')
  
    }
  let pyshell = new PythonShell('numbers.py', pyInput);
   
  // sends a message to the Python script via stdin
  pyshell.send('hello');
   
  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
  });
  }
  
newPridiction()


function getPrediction() {
 

let pyshell = new PythonShell('my_script.py');
 
// sends a message to the Python script via stdin
pyshell.send('hello');
 
pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

}


function display () {
 
  let h1 = document.createElement("h5");
 let predictionReult = document.createTextNode("this is the p" );
h1.appendChild(predictionReult)
  
document.getElementById("pridicted").textContent= "here is the new messsage"// document.getElementById("pridicted").appendChild(h1);
  //document.getElementsByClassName('result').appendChild(h1)
 console.log("message created now")

}



function remove (){

document.getElementById("pridicted").textContent= ""
console.log("message removed")
   

  }




