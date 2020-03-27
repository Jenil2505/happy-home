
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqbTon2DTHJWxXLbRwSLR4zPSmSa0KG1E",
    authDomain: "happy-home-1bd6c.firebaseapp.com",
    databaseURL: "https://happy-home-1bd6c.firebaseio.com",
    projectId: "happy-home-1bd6c",
    storageBucket: "happy-home-1bd6c.appspot.com",
    messagingSenderId: "305064048341",
    appId: "1:305064048341:web:4a5b1353705bb96787545c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth=firebase.auth();

function signUp(){
 var email=document.getElementById("email");
 var password=document.getElementById("password");
 
 const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
 promise.catch(e => alert(e.message));
 
 alert("Signed Up");
  }
 
  function signIn(){
 var email=document.getElementById("email");
 var password=document.getElementById("password");
 
 const promise = auth.signInWithEmailAndPassword(email.value, password.value);
 promise.catch(e => alert(e.message));
 
 //alert("Signed In" + email.value);
  }
 
  function signOut(){
 auth.signOut();
 alert("Signed");
  }
 
  auth.onAuthStateChanged(function(user){
 
 if(user){
var email=user.email;
alert("Active user " + email);

 }
 else{
 alert("No Active Users");

 }  
 
  });
  
