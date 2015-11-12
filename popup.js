
/* add event listeners to buttons */
document.getElementById('btn_submit').addEventListener('click', hello);

function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}




// <button onclick="myFunction()">Try it</button>
// function myFunction() {
//     document.getElementById("myText").value = "Johnny Bravo";
// }
