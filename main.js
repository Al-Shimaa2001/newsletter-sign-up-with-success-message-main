let button = document.querySelector("button");
let icons = document.querySelector(".icons");
let author = document.querySelector(".author");

if (window.innerWidth >= 1000) {
  button.addEventListener("click", function () {
    icons.style.display = "flex";
    removeShare();
  });
} else {
  button.addEventListener("click", () => {
    author.style.display = "none";
    icons.classList.add("icons-small-screen");
    removeShare();
  });
}

function removeShare() {
  button.addEventListener("mouseleave", () => {
    setTimeout(() => {
      icons.style.display = "none";
      if (author.style.display == "none") {
        author.style.display = "flex";
      }
    }, 3000);
  });
}
