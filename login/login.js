const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation-container"),

  path: "/login/images/myLoti.json",

  renderer: "svg",

  loop: true,

  autoplay: true,

  name: "Demo Animation",
});

var document = document.getElementById;

// function loginFunc() {
//   var userName = document.getElementById("usrnm").value;
//   var pass = document.getElementById("pwd").value;
//   if (userName == "admin" && pass == "admin") {
// 	localStorage.setItem("flag", true);
// 	window.location.href = "/index.html";
//     console.log("this");
//     document.getElementById("login").classList.add("hide");
//     debugger;
//     document.getElementById("register").classList.add("hide");
//     document.getElementById("logout").classList.remove("hide");
//   }
// }
