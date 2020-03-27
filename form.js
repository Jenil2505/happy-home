$("#psend").click(function () {
  var name = $("#name").val();
  var email = $("#email").val();
  var comments = $("#comments").val();
  var mobileno = $("#mobileno").val();

  var rootRef = firebase.database().ref().child("Feed Back");
  var userID = firebase.auth().currentUser.uid;
  var userRef = rootRef.child(userID);

  var userData={
    "Name": name,
    "email": email,
    "comments": comments,
    "mobileno": mobileno,
  };

  userRef.set(userData,function (error)
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