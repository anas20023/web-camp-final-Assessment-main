var username = "jr.dev101@gmail.com";
var pw = "123456#";
let g_pw;
let g_user;

function Get_VAL_U() {
  g_user = document.getElementById("email").value;
}
function Get_VAL_P() {
  g_pw = document.getElementById("password").value;
}

function Login() {
  if (g_pw == null && g_user == null) {
    alert("Please Enter Username and Password");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } else if (g_user === username && g_pw === pw) {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    location.href = "./wallet.html";
  } else {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login_parent").style.display="none";
    document.getElementById("alert").style.display="flex";
  }
}

function Close_Alert() {
    g_pw=null;
    g_user=null;
    document.getElementById("alert").style.display="none";
    document.getElementById("login_parent").style.display="flex";
}
