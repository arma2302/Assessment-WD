// SPAN OPACITY 0 IN NORMAL
document.getElementById("show").style.display = "none";

//   FUNCTION FOR SHOW AND HIDE PASSWORD//and PLACEHOLDER
function ChangeInput(a, holder, hideshow) {
  if (a != "") {
    document.getElementById(holder).style.top = "0px";
    console.log("10px");
    document.getElementById(holder).style.transition = "0.3s ease";
    document.getElementById(hideshow).style.display = "block";
  } else {
    document.getElementById(holder).style.top = "10px";
    document.getElementById(hideshow).style.display = "none";
  }
}
function showpass() {
  let user_pass = document.getElementById("pass");
  if (user_pass.type === "password" && user_pass.value !== "") {
    user_pass.type = "text";
    document.getElementById("show").innerText = "Hide";
  } else {
    user_pass.type = "password";
    document.getElementById("show").innerText = "show";
  }
}

// login
function login() {
  window.open("https://www.instagram.com/instagram/", "_blank");
}
// signUp
function signUp() {
  window.open("https://www.instagram.com/accounts/emailsignup/", "_blank");
}
// Googleplay
function gplay() {
  window.open(
    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D078521EA-E1F3-4976-BC9D-8A84C7A9E31A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://in.search.yahoo.com/&pli=1",
    "_blank "
  );
}
