function ValidateForm()
{
	var username=document.getElementById("username");
	var phoneNum=document.getElementById("phoneNum");
	var Email=document.getElementById("Email");
	var password=document.getElementById("password");
	var confirm_password=document.getElementById("confirm_password");
	removeMessage();
	var valid=true;
	if(username.value.length==0)
	{
		username.className="wrong-input";
		username.nextElementSibling.innerHTML="Username cant be blank";
		valid=false;
	}

	if(phoneNum.value.length<10)
	{
		phoneNum.className="wrong-input";
		phoneNum.nextElementSibling.innerHTML="contact num must not be less than 10";
		valid=false;
	}
		return valid;
	

	if(password.value.length<6)
	{
		password.className="wrong-input";
		password.nextElementSibling.innerHTML="password cannot be less than 6";
		valid=false;
	}

	if(password.value!=confirm_password.value)
	{
		confirm_password.className="wrong-input";
		confirm_password.nextElementSibling.innerHTML="password does'nt match";
		valid=false;
	}
	return valid;
}
function removeMessage();
{
		var errorinput=document.querySelector(".wrong-input");
		[].forEach.call(errorinput,function(el)
		{
			el.classList.remove("wrong-input");
		});

		var errorpara=document.querySelectorAll(".error");
		[].forEach.call(errorinput,function(el)
		{
			el.innerHTML="";
		});
	}

	


