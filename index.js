var contactRef = firebase.database().ref().child("contact");

document.getElementById('contact').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

	var name = getInputVal('name');
	var email = getInputVal('email');
	var comments = getInputVal('comments');
	var mobileno = getInputVal('mobileno');


	saveForm(name,email,comments,mobileno);

	document.getElementById('contact').reset();
}

function getInputVal(id)
{
        return document.getElementById(id).value;
}

function saveForm(name,email,comments,mobileno)
{
       var newcontactRef = contactRef.push();
       newcontactRef.set({
           name : name,
           email : email,
           comments  : comments,
           mobileno : mobileno
       });
}