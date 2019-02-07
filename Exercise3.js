function changeText2(e) {
    allTDs.innerText = "JQuery"
}
var allTDs= document.querySelector(".JQuery");
var button2 = document.getElementById("btn3");
button2.addEventListener("click", backGroundChange);
button2.addEventListener("click", changeText2);



var allTDs = document.getElementsByTagName("td");