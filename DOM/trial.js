function sayHello(){
	var a = document.getElementById("name").value;
	var message = "<h1>Hello " + a + "!</h1>";
	document
	.getElementById("content")
	.innerHTML = message;

	if(name === "world"){
		var title = document.querySelector("title").textContent;
		title += "I Know Your Cruelty";
		document
		.querySelector("#title")
		.textContent = title;
	}

}