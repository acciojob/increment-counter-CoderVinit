//your JS code here. If required.
let count = 0;
let button = document.getElementById("btn")
let paragraph = document.getElementById('para')

paragraph.textContent = count;

button.addEventListener('click',()=>{
	alert(count)
	paragraph.textContent = ++count
	
})