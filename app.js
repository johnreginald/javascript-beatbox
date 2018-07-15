var header = document.querySelector("#header")
var revert = document.querySelector("#revert")
var original = document.querySelector("#original")

revert.onclick = function() {
	header.innerText = "World Hello";
	header.style.color = "red";
	header.style.backgroundColor = "black";
}

original.onclick = function() {
	header.innerText = "Hello World";
	header.style.color = "black";
	header.style.backgroundColor = "white";
}