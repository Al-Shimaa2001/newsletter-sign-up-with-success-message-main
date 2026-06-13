const email = document.querySelector("#mail");
let submit = document.querySelector(".submit");
let error = document.querySelector(".error");
submit.addEventListener("click", (e) => {
  let value = email.value.trim();
  if (value === "") {
    e.preventDefault();
    error.style.visibility = "visible";

    errorVisibility();
  } else {
    if (value) {
      console.log(value);
      window.location.href = "./success-page.html";
      email.value = "";
    }
  }
});

function errorVisibility() {
  setTimeout(() => {
    error.style.visibility = "hidden";
  }, 2000);
}
