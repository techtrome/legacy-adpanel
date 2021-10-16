const addProductInputElement = document.querySelectorAll('.add-product input[type="text"]'),
	submitButton = document.querySelector('input[type="submit"]'),
	productSelection = document.querySelectorAll('.add-product select option'),
	uploadImageBtn = document.querySelector('.add-product label + span'),
	fileInput = document.querySelector('.add-product input[type="file"]');
	console.log(fileInput)

function checkAddProduct(ev){
	if(addProductInputElement[0].value.trim() === '' || 
		addProductInputElement[2].value.trim() === '')
	{
		ev.preventDefault();
		alert('Input required field');
	}else{
		if(productSelection[0].selected === true){
			ev.preventDefault();
			alert('Select Category');	
		}
	}
}

function passFileInput(ev){
	fileInput.click();

	fileInput.onchange = function(){
		uploadImageBtn.style.backgroundColor = '#b7bda6';
		// uploadImageBtn.style.backgroundColor = '#00bd06';
		uploadImageBtn.textContent = 'Uploaded';
	}
}



submitButton.onclick = checkAddProduct;
uploadImageBtn.onclick = passFileInput;