// confirming the value of the email input 


function verifyPassword() {  
    var pw = document.getElementById("re_pass").value;  
    //check empty password field  
    if(pw == "") {  
       alert("**Fill the password please!");  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       alert("**Password length must be atleast 8 characters");  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       alert("**Password length must not exceed 15 characters");  
       return false;  
    } 
    



    // checking password similarity in registration for retrype pass
    var firstpassword=document.getElementById("re_pass").value;  
    var secondpassword=document.getElementById("re_pass1").value; 
      
    if(firstpassword==secondpassword){  
    return alert("successfull registration !");  
    }  
    else{  
    alert("password must be same!");  
    return false;  
    }  
  }  


// validating the email entered if true

  function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  

// checking password similarity in registration for retrype pass
function matchpass(){  
   var firstpassword=document.getElementById("re_pass").value;  
   var secondpassword=document.getElementById("re_pass1").value; 
   
   if(firstpassword==secondpassword){  
    
   return true;  
   }  


   //picking data and sending it to a table in local storage 
   
  


   else{  
   alert("password must be same!");  
   return false;  
   }  
   
   }  
//function moved to above function to run in unison

function dataread()
{
  event.preventDefault();
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   console.log("running dataread fetched variables ")
   localStorage.setItem("ls_name", name);
   localStorage.setItem("ls_email",email);
   console.log("running dataread stored ");
}
 // pushing the data of registered users to a table in index.html
function datafetch()
{
   var name = localStorage.getItem("ls_name");
   var email = localStorage.getItem("ls_email");

   document.getElementById("nameval").innerText = name;
   document.getElementById("emailval").innerText = email;


}