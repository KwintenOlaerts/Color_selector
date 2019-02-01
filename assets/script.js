var color = document.getElementById("changeColor");

document.getElementById('blue').addEventListener("click", turnBlue)
document.getElementById('red').addEventListener("click", turnRed)
document.getElementById('green').addEventListener("click", turnGreen)

function turnBlue (){
    color.style.backgroundColor = "blue";
}

function turnRed () {
    color.style.backgroundColor = "red";
}

function turnGreen () {
    color.style.backgroundColor = "green";
}s






