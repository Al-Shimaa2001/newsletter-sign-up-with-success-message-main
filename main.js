let button = document.querySelector("button");
let icons = document.querySelector(".icons");
let author = document.querySelector(".author");

if (window.innerWidth >= 1000) {
  button.addEventListener("click", function () {
    icons.classList.remove("icon--nonvisible");
    icons.classList.add("icon--visible");
    removeShare();
  });
} else {
  button.addEventListener("click", () => {
    author.classList.add("is-hidden");
    icons.classList.add("icons-small-screen");
    removeShare();
  });
}

function removeShare() {
  button.addEventListener("mouseleave", () => {
    setTimeout(() => {
      icons.classList.remove("icon--visible");
      icons.classList.add("icon--nonvisible");
      if (author.style.display == "none") {
        author.style.display = "flex";
      }
    }, 3000);
  });
}
