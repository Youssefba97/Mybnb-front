var img = "";

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        img = reader.result;
        console.log(img);

    };
    reader.readAsDataURL(input.files[0]);

}
//Read Image from input
// <input id="image" type="file" name="myFile"class="form-control" onchange="openFile(event)"></input>

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
        <center>
        <a href="profile1.html">${userNotConnected.firstName} ${userNotConnected.lastName}</a>
        <br>
         <a href="profile1.html"> <img src="images/featured-img/img-05.jpg" alt="Avatar" class="avatar"></a>
         <br>
         <button type="submit" onclick="logout()">Logout</button>
         </center>
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



let createProfile = () => {
    var userNotConnected = JSON.parse(localStorage.getItem("con_user")) || "";
    // console.log(userNotConnected);
    
    if (userNotConnected != "") {
        var createProfile = document.querySelector(".userName")
        var htmlProfile =  `
        <img src="images/featured-img/img-05.jpg" style="height: 100px;width: 100px;">
        <h5 class="mb-3">User Profile</h5>
        <div class="row">
            <div class="col-md-6">
                <h6>About</h6>
                <p>
                    Web Designer, UI/UX Engineer
                </p>
                <h6>Hobbies</h6>
                <p>
                    Indie music, skiing and hiking. I love the great outdoors.
                </p>
            </div>
            <div class="col-md-6">
                
            <div class="col-md-12">
                <h5 class="mt-2"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                <table class="table table-sm table-hover table-striped">
                    <tbody>                                    
                        <tr>
                            <td>
                                <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--/row-->
    </div>
    <div class="tab-pane" id="messages">
        <div class="alert alert-dark alert-dismissable">
            <a class="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
        <table class="table table-hover table-striped">
            <tbody>                                    
                <tr>
                    <td>
                       <span class="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                    </td>
                </tr>
                <tr>
                    <td>
                       <span class="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                    </td>
                </tr>
                <tr>
                    <td>
                       <span class="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus. 
                    </td>
                </tr>
                <tr>
                    <td>
                       <span class="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus. 
                    </td>
                </tr>
                <tr>
                    <td>
                       <span class="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros. 
                    </td>
                </tr>
            </tbody> 
        </table>
    </div>
         `
    createProfile.innerHTML=htmlProfile ;
console.log("userconncted");
    
    }
}