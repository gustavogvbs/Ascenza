const section = `
<div class="container-ns__test">
  <div class="wrapper-ns__test">
    <span class="widget-ns__test">gratuito</span>
    <h3 class="title-ns__test">Registrati e visualizza corsi e articoli esclusivi</h3>
  </div>

  <div>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <button onclick="openModalSlider(1)" class="button-modal__test">
              <img src="https://i.imgur.com/FOvJMay.png" alt="" />
            </button>
          </li>
          <li class="glide__slide">
            <button onclick="openModalSlider(0)" class="button-modal__test">
              <img src="https://i.imgur.com/tWRnudT.png" alt="" />
            </button>
          </li>
          <li class="glide__slide">
            <button onclick="openModalSlider(2)" class="button-modal__test">
              <img src="https://i.imgur.com/CLaXHvw.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="wrapper-ns__test">
    <p class="text-ns__test">
      Curioso di sapere quali sono le ultime tendenze ed innovazioni in agricoltura? Vedi tutte le
      persone che temiamo per te.
    </p>
    <a class="cta-btn-ns__test" href="http://">Registrati ora</a>
  </div>
</div>
`;

const fieldItemSection = document.querySelectorAll(".field__item")[0];

function insertAfter(newElement, reference) {
  reference.parentNode.insertBefore(newElement, reference.nextSibling);
}

const el = document.createElement("div");
el.innerHTML = section;
el.classList.add("section-ns__test");
insertAfter(el, fieldItemSection);

window.addEventListener("load", () => {
  setTimeout(() => {
    new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      startAt: 1,
      gap: 0,
    }).mount();
  }, 500);
});

const modal = document.getElementById("modal-test");
const buttonModal = document.querySelectorAll(".button-modal__test");

function openModalSlider(val) {
  console.log(val);
  modal.classList.remove("disabled");

  document.getElementById("video-" + val).style.display = "block";
  if (val == 0) {
    document.getElementById("video-0").innerHTML = `<iframe
      width="100%"
      height="297"
      data-cookieconsent="marketing"
      src="https://www.youtube.com/embed/q6HnFv5QXjw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
    ></iframe>`;
  }
}

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal-test") {
    modal.classList.add("disabled");
    document.getElementById("video-0").innerHTML = "";
    document.getElementById("video-1").style.display = "none";
    document.getElementById("video-2").style.display = "none";
  }
});
