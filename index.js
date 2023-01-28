const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	e.preventDefault();

});


function checkInputs() {

	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	

	//valido usuario
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Rellene este campo');
	} else if (!isUsuario (usuarioValue)) {
		setErrorFor(usuario, 'No se admiten números');
	} else {
		setSuccessFor(usuario);
	}


	//valido el email. tiene que contener el @
	if(emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email inválido');
	} else {
		setSuccessFor(email);
		
	}
	

	//valido la contraseña. deberá tener 8 caracteres.
	if(passwordValue === '') {
		setErrorFor(password, 'Rellene este campo.');
	} else if (!isPassword (passwordValue)) {
		setErrorFor (password, 'No debe tener más de 8 caracteres');
	} else {
		setSuccessFor(password);
	}
	

	//valido repetir contraseña. deben ser las mismas
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}

	//valido formulario. alerta mensaje exito
	if (usuarioValue && emailValue && passwordValue && password2Value){
		alert("La inscripción se ha realizado con éxito");
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


function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}


function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isPassword (password){
	return /^[A-Za-z0-9.#$]{8,8}/.test (password);
}


function isUsuario(usuario) {
	return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario);
}