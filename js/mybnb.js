

// When the user clicks anywhere outside of the modal, close it ??????
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


// The user can create an account 


  function saving() {

    var pass1 = document.querySelector(".pw").value;
    var mail = document.querySelector(".email").value;
    var id = Math.floor((Math.random() * 10000));
    console.log(id);  // the id takes the value of age ??!!
    
    
    var loc = JSON.parse(localStorage.getItem("user")) || [];  
    
    var object = {
        email: mail,
        password: pass1,
        id : id ,
    }
     loc.push(object);
     console.log(loc);
     
     localStorage.setItem("user",JSON.stringify(loc))
  
  }

  var pw = document.querySelector(".pw");
var email = document.querySelector(".email");
let signupbtn = document.querySelector(".register");
signupbtn.addEventListener("click",()=>{
    if (!comparepw()) {
      alert ("Wrong pw ")
    } else {
      alert ("Welcome ")
      // console.log(window.er);

        window.location.href="./modal.html"
   saving()
    // window.location.replace = "file:///C:/Users/Youssef/Desktop/5p/20-1/modal.html"
    }
   

});
function comparepw() {
  var pw1 = document.querySelector(".pw1");
  if (pw.value != pw1.value) {
    return false; 
  } else {
             return true;
  }
}


// The user can log in 


function validate() {
    var pass = document.querySelector(".copw").value;
    var mail = document.querySelector(".coemail").value;
console.log(pass);

    
    var user = JSON.parse(localStorage.getItem("user")) || [];
    //pw = localStorage.getItem ("password")
    
    console.log(user[0].email);    console.log(user[0].password);

    var loginMail= false ;
    var loginPw = false ;
   // email = localStorage.getItem("e-mail")
   for (let i = 0; i < user.length; i++) {
    
    if(mail == user[i].email) {
        loginMail = true ;
        if (pass == user[i].password) {    
            loginPw = true ;
            localStorage.setItem("con_user",JSON.stringify(user[i]));
            // window.location.href = "http://127.0.0.1:5500/afficher.html"
            break ;
        }
    
    }  
}   
if (loginMail == true && loginPw == true) {
    alert ("you are logged in")
                window.open  ("http://127.0.0.1:5500/afficher.html","_blank")

} 
else alert ("please verify your e-mail or pw")
}

