// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCCEpJdRiCdkW5tGpkBMsrRnh1knwRkryA",
    authDomain: "notes-app-c9b3b.firebaseapp.com",
    projectId: "notes-app-c9b3b",
    storageBucket: "notes-app-c9b3b.appspot.com",
    messagingSenderId: "1083590641493",
    appId: "1:1083590641493:web:8b58b9038464255aeb91dc",
    measurementId: "G-8074K5M50D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var messageref=firebase.database();



document.getElementById('signup').addEventListener('submit',submitform);


function submitform(e)
{
   e.preventDefault();
   var name=document.getElementById('nm').value ;
   var email=document.getElementById('em').value ;
   var mobile=document.getElementById('mb').value ;
   var p1=document.getElementById('p1').value ;
   var p2=document.getElementById('p2').value ;
   var city=document.getElementById('c').value ;
   var username=document.getElementById('ad').value ;
  

   if(p1!=p2)
   {
       alert("password doesn't match");
   }
   else
   {
       savemessage(name,email,mobile,p1,city,username);
       
   }
   function savemessage(name,email,mobile,p1,city,username)
       {
           var newmsgref=messageref.push();
           newmsgref.set({
               Name:name,
               Email:email,
               Mobile:mobile,
               Password:p1,
               city:city,
               Username:username,
           })
       }


     }