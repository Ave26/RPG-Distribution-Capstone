function showLoginPopup() {
    var loginPopup = document.getElementById("login-popup");
    var body = document.querySelector("body");
    var header = document.getElementById("header");
    var footer = document.querySelector("footer");
  
    loginPopup.classList.add("visible");
    body.classList.add("blur");
    header.classList.add("blur");
    footer.classList.add("blur");
    loginPopup.innerHTML = '<iframe src="login.html"></iframe>';
  }
  