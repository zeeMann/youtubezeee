function validateName()
{
	var name = document.getElementById("Name").value;
	
	if(name.length==0)
	{
		producePrompt("Name is required","namePrompt","green");
		return false;
	}
}

function producePrompt(message,promptLocation,color)
{
	document.getElementById(promptLocation).innerHTML=message;
	document.getElementById(promptLocation).style.color=color;
	
}