window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const stickybar = document.getElementById("stickybar-test");

  if (scroll >= 200) {
    if (stickybar.classList.contains("hide")) {
      stickybar.classList.remove("hide");
    }
  } else {
    if (!stickybar.classList.contains("hide")) {
      stickybar.classList.add("hide");
    }
  }
});

const href = document.querySelector("a.cta-btn").getAttribute("href");
const ctaStickyBar = document.getElementById("cta-stckybar");

ctaStickyBar.setAttribute("href", href);
