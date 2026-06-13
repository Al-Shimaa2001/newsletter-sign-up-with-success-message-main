const email = document.querySelector("#mail");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
submit.addEventListener("click", (e) => {
  const value = email.value.trim();
  if (value === "") {
    e.preventDefault();
    error.style.visibility = "visible";

    errorVisibility();
  } else {
    if (value) {
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
