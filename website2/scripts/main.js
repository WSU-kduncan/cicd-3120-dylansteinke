"use strict";

var submitForm = function() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var errorMessage = "";
	var validatePhone = /^\d{3}-\d{3}-\d{4}$/;

    // validate the entries
    if (name == "") {
    	errorMessage = "You must enter a name";
		document.getElementById("name").nextElementSibling.firstChild.nodeValue = errorMessage;
    } else {
		document.getElementById("name").nextElementSibling.firstChild.nodeValue = "";
	}
	
	var phoneIsValid = validatePhone.test(phone);	
	
    if (phone == "") {
    	errorMessage = "You must enter a phone number";		
		document.getElementById("phone").nextElementSibling.firstChild.nodeValue = errorMessage;
    } else if (!phoneIsValid){
		errorMessage = "Phone format must be 123-123-1234";
		var phoneIsValid = validatePhone.test(phone);	
		document.getElementById("phone").nextElementSibling.firstChild.nodeValue = errorMessage;
	} else {
		document.getElementById("phone").nextElementSibling.firstChild.nodeValue = "";
	}
	
	
    if (email == "") {
    	errorMessage = "You must enter an email address";
		document.getElementById("email").nextElementSibling.firstChild.nodeValue = errorMessage;
    } else {
		document.getElementById("email").nextElementSibling.firstChild.nodeValue = "";
	}
	
	
    // submit the form if all entries are valid
    if (errorMessage == "") {
		document.getElementById("order_form").submit();
    }
};

var resetform = function() {
	document.getElementById("order_form").reset();
	var errorMessage = "";
	document.getElementById("name").nextElementSibling.firstChild.nodeValue = errorMessage;
	document.getElementById("phone").nextElementSibling.firstChild.nodeValue = errorMessage;
	document.getElementById("email").nextElementSibling.firstChild.nodeValue = errorMessage;
	picture.src = "images/reds.png";
};

var changeImg = function() {
	if (document.getElementById("tigers").checked)
		document.getElementById("picture").src = "images/tigers.png";
	else if(document.getElementById("indians").checked)
		document.getElementById("picture").src = "images/indians.png";
	else if (document.getElementById("reds").checked) 
		document.getElementById("picture").src = "images/reds.png";
};

window.onload = function() {
	document.getElementById("tigers").onclick = changeImg;
	document.getElementById("indians").onclick = changeImg;
	document.getElementById("reds").onclick = changeImg;
	document.getElementById("clear_form").onclick = resetform;
    document.getElementById("submit_form").onclick = submitForm;
    document.getElementById("name").focus();
};



















