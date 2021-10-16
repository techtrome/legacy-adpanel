const loginInputElement = document.querySelectorAll('.login input'),
  registerInputElement = document.querySelectorAll('.register input');

function checkLogin(ev){
	if(loginInputElement[0].value.trim() === '' || 
		loginInputElement[1].value.trim() === '')
	{
		ev.preventDefault();
		alert('Username or Password is not entered!!!');
	}
}

function checkRegister(ev){
	if(registerInputElement[0].value.trim() === '' || 
		registerInputElement[1].value.trim() === '' || 
		registerInputElement[2].value.trim() === '')
	{
		ev.preventDefault();
		alert('Input your data appropriately');
	}else{
		if(registerInputElement[1].value.trim() !== registerInputElement[2].value.trim()){
			ev.preventDefault();
			alert('Password Mismatch!!!');
		}	
	}
}

loginInputElement[2].onclick = checkLogin;
registerInputElement[3].onclick = checkRegister;
