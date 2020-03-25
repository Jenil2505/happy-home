$("psend").click(function()
{
  var name = $("#name").val();
  var email = $("#email").val();
  var comments = $("#comments").val();
  var mobileno = $("#mobileno").val();

  var rootRef = firebase.database().ref().child("Feed Back");
 

  var userData = {
    "Name" : name,
    "Email" : email,
    "Comment" : comments,
    "Mobile no" : mobileno,
  };
  userRef.set(userData,function(error)
  {
    if(error)
    {
      window.alert("Error");
    }
    else
    {

    }
  });
});