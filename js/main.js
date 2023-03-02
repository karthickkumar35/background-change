
let btn = document.getElementById("btn");
let body = document.querySelector("body");

var color =["red","green","blue","yellow","gray","brown","purple","pink"];

btn.addEventListener('click',function(){
	c = Math.floor(Math.random()*color.length);
	
	body.style.backgroundColor=color[c];
});
