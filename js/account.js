// container for the sign in form
var container = document.querySelector('#container');
// the input box of deposit form
document.querySelector("#depositAmount").value = "";
var depositForm = document.querySelector('#depositForm');
var signInBtn = document.querySelector("#signIn");
var balance = document.querySelector('#balance');
var depositBtn = document.querySelector("#deposit");
var signOutBtn = document.querySelector("#signOut");
depositBtn.addEventListener('click', deposit);
// is user logged in?
isLoggedIn();

signInBtn.addEventListener('click', function(){
  // get username
    var username = document.querySelectorAll('[type="name"]')[0].value;
    // get password
    var password = document.querySelectorAll('[type="password"]')[0].value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('balance', '0.00');
    isLoggedIn();
  })

function isLoggedIn(){
  if(localStorage.getItem('username') != ""){
    document.querySelector("#welcome-msg").innerText = "Welcome " + localStorage.getItem('username');
    container.style.display = "none";
    depositForm.style.display = "block";
    balance.innerText = localStorage.getItem('balance');
    signOutBtn.style.visibility = "visible";
  }
  else{
    depositForm.style.display = "none";
  } 
}


function signOut(){
  localStorage.setItem('username', '');
  localStorage.setItem('password', '');
  localStorage.setItem('balance', '0.00');
  container.style.display = "block";
  document.querySelector("#welcome-msg").innerText = "Welcome to E-banking"
  depositForm.style.display = "none";
}

function deposit(){
  var depositAmount;
  var initialBalance = parseFloat(localStorage.getItem('balance'));
  var amountInp = document.querySelector("#depositAmount");
  if(amountInp.value == "" | parseFloat(amountInp.value) < 0){
    depositAmount = 0.00;
  }
  else depositAmount = parseFloat(amountInp.value);
  localStorage.setItem('balance', (depositAmount + initialBalance));
  // set the balance innerText to the new balance from the cookie
  balance.innerText = localStorage.getItem("balance");
  amountInp.value = "";
  alert("Deposit of Gh¢ " + depositAmount + " made.\nNew balance is Gh¢ " + localStorage.getItem("balance"));
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

