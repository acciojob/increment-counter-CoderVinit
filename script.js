//your JS code here. If required.
let inital_value = 0;
let button = document.getElementById("incrementBtn")
let paragraph = document.getElementById('counter')

paragraph.textContent = inital_value;

button.addEventListener('click',()=>{
	alert(inital_value)
	paragraph.textContent = ++inital_value
	
})