var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var btn = document.getElementsByClassName("delbtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn2 = document.createElement("button");

	btn2.classList.add("delbtn");
	btn2.appendChild(document.createTextNode("DEL"));
	btn2.addEventListener("click", delBtn);
	btn2.addEventListener("mouseenter", mEnter);
	btn2.addEventListener("mouseleave", mLeave);

	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", toggleDone);
	li.appendChild(btn2);

	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle("done");
			
}

function delBtn() {
	this.parentNode.remove();
}

function mEnter() {
	this.classList.add("mouseEnter");
}

function mLeave() {
	this.classList.remove("mouseEnter");
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


listItems.forEach(function(lis) {
lis.addEventListener("click", toggleDone);
});

[].forEach.call(btn, function(del) {
	del.addEventListener("click", delBtn);
});

[].forEach.call(btn, function(onmouse) {
	onmouse.addEventListener("mouseenter", mEnter);
	onmouse.addEventListener("mouseleave", mLeave);
});




