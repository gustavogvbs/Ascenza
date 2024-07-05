const closeBtn = document.getElementById("close-widget-test");

closeBtn.addEventListener("click", () => {
  const widget = document.getElementById("container-widget-test");
  widget.classList.add("hide");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const widget = document.getElementById("container-widget-test");
    widget.classList.remove("hide");
  }, 2000);
});

const href = document.querySelector("a.cta-btn").getAttribute("href");
const ctaWidget = document.getElementById("cta-widget");

ctaWidget.setAttribute("href", href);
