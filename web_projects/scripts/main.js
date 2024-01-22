const webHeading = document.querySelector("h1");
webHeading.textContent = "Welcome to my webpage!";

const switchButton = document.getElementById("switchButton");
const webImage = document.getElementById("webImage");

switchButton.onclick = () => {
  const mySrc = webImage.getAttribute("src");
  if (mySrc === "images/img1.jpeg") {
    webImage.setAttribute("src", "images/img2.jpeg");
  } else {
    webImage.setAttribute("src", "images/img1.jpeg");
  }
};

let myButton = document.getElementById("setNameButton");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my webpage, ${myName}!`;
    }
  };

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my webpage, ${storedName}!`;
  };
  
  myButton.onclick = () => {
    setUserName();
  };
  
  document.getElementById("setNameButton").addEventListener("click", function() {
    alert("Your username has been changed!")
  }); 
