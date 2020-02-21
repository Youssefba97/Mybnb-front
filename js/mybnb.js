

// When the user clicks anywhere outside of the modal, close it ??????
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  function logout() {
    localStorage.removeItem("con_user")
    window.location.replace("index.html") ;
  }

  function comparepw() {
    var pw = document.querySelector(".pw");
    var pw1 = document.querySelector(".pw1");
    console.log(pw.value);
    console.log(pw1.value);
    
    
    if ((pw.value != pw1.value ) || (pw.value  == ""  )) {
      return false; 
    } else {
               return true;
    }
  }

// The user can create an account 


  function saving() {

    var pass1 = document.querySelector(".pw").value;
    var mail = document.querySelector(".email").value;
    var id = Math.floor((Math.random() * 10000));
    var firstName = document.querySelector(".firstName").value;
    var lastName = document.querySelector(".lastName").value;
    // console.log(firstName); 
    
    
    var loc = JSON.parse(localStorage.getItem("user")) || [];  
    
    var object = {
        email: mail,
        password: pass1,
        id : id ,
        firstName : firstName ,
        lastName : lastName ,
        status:"Pending",
        houses:[],
    }
     loc.push(object);
    //  console.log(loc);
     
     localStorage.setItem("user",JSON.stringify(loc))
  
  }

var email = document.querySelector(".email");
let signupbtn = document.querySelector(".register");
signupbtn.addEventListener("click",()=>{
    if (comparepw()==false) {
      alert ("Wrong pw ")
    } else {
      alert ("Welcome ")
      // console.log(window.er);
   saving()
    }
   

});



// The user can log in 


function validate() {
    var pass = document.querySelector(".copw").value;
    var mail = document.querySelector(".coemail").value;
console.log(pass);

    
    var user = JSON.parse(localStorage.getItem("user")) || [];
    //pw = localStorage.getItem ("password")
    
    // console.log(user[0].email);    console.log(user[0].password);

    var loginMail= false ;
    var loginPw = false ;
   // email = localStorage.getItem("e-mail")
   for (let i = 0; i < user.length; i++) {
    
    if(mail == user[i].email) {
        loginMail = true ;
        if (pass == user[i].password) {    
            loginPw = true ;
            localStorage.setItem("con_user",JSON.stringify(user[i]));
            break ;
        }
    
    }  
}   
if (loginMail == true && loginPw == true) {
    alert ("you are logged in") 
        location.reload() ;

} 
else alert ("please verify your e-mail or pw")
}

// if the user is not connected and clicks on "become a host" it opens the modal of log in

let verifyConnected = () => {
    var userHost = JSON.parse(localStorage.getItem("con_user")) || "";
    console.log(userHost);
    
    if (userHost != "") {
        var becomeahost = document.getElementById("becomeahost")
        var html = `<a href="becomeahost.html"  >Become a host</a>`
        becomeahost.innerHTML=html ;
    }
    else {
        var becomeahost = document.getElementById("becomeahost")
        var html = `<a href="javascript:void(0);"  data-toggle="modal" data-target="#loginpopup">Become a host</a>`
        becomeahost.innerHTML=html ;
    }

}

// when the user connects his photo appears 

let createAvatar = () => {
    var userNotConnected = JSON.parse(localStorage.getItem("con_user")) || "";
    console.log(userNotConnected);
    
    if (userNotConnected != "") {
        var putAvatar = document.getElementById("userAvatar")
        var htmlConnected =  `
        <div > 
        <a href="profile1.html">${userNotConnected.firstName} ${userNotConnected.lastName}</a>
        <button type="submit" onclick="logout()">logout</button>
       <a href="profile1.html"> <img src="images/featured-img/img-05.jpg" alt="Avatar" class="avatar"></a>
        </div>
        `
    putAvatar.innerHTML=htmlConnected ;
console.log("userconncted");
    
    }
    else {
        var disconnected = document.getElementById("userAvatar")
        var htmlDisconnected = `
        <a href="javascript:void(0);" class="at-btn at-btnactive" data-toggle="modal" data-target="#loginpopup">Log in</a>
        <em>OR</em>
        <a href="javascript:void(0);" class="at-btn at-btnactive at-btntwo" data-toggle="modal" data-target="#registerpopup">Register</a>`
    disconnected.innerHTML=htmlDisconnected ;
console.log("user offline");
   
}
    

}
