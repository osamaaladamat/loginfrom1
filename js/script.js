const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Please do not type the firstname blank');
	} else if (!fname(firstnameValue)) {
        setErrorFor(firstname, 'Not a valid fname');
    }else{
		setSuccessFor(firstname);
	}
	
	if(lastnameValue === '') {
		setErrorFor(lastname, 'Please do not type the firstname blank');
	} else if (!lname(lastnameValue)) {
        setErrorFor(lastname, 'Not a valid lname');
    }else{
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Please do not type the Email blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	if(phoneValue === '') {
		setErrorFor(phone, 'Please do not type the Phone blank');
	} else if (!phone1(phoneValue)) {
		setErrorFor(phone, 'Not a valid Phone');
	} else {
		setSuccessFor(phone);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'Please do not type the Password blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Please do not type the Password2 blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function email1(email) {
	return /^[a-zA-Z]{1,10}@[a-zA-Z]{1-10}.[a-zA-Z]/.test(email);
}
 function fname(firstname) {
        return /^[a-z]{1,10}/.test(firstname);
    }

function lname(lastname) {
	return /^[a-z]{1,10}/.test(lastname);
}

function phone1(phone) {
	return /^[00962]{6})([7-9]{1})([0-9]{7})/ .test(phone);
}

function pass(password) {
	return /^[a-zA-Z0-9!@#%$&^]{8,32}/.test(password);
}










