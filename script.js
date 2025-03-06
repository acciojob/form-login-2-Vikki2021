//your JS code here. If required.
let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
	let input1 = document.getElementById("first-name").value;
	let input2 = document.getElementById("last-name").value;
	let input3 = document.getElementById("number").value;
	let input4 = document.getElementById("mail").value;
	let ans = `First Name: ${input1} Last Name: ${input2} Phone Number: ${input3} Email ID: ${input4}`
    alert(ans);
});

