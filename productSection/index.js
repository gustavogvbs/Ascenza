const section = document.querySelector(
  "section.paragraph.paragraph--type--info-box.paragraph--view-mode--default"
);

const wrapper = document.querySelector(
  "section.paragraph.paragraph--type--info-box.paragraph--view-mode--default .box"
);

const link = document.querySelector(
  ".field.field--name-field-read-more.field--type-link.field--label-visually_hidden a"
);
const href = link.getAttribute("href");

const newSection = `
  <div class="wrapper-container__test-product">
    <div class="wrapper-one__test-product">
      <div>
        <span class="budget__test-product">gratuito</span>
      </div>
      <h2 class="title__test-product">Registrati e visualizza corsi e articoli esclusivi</h2>
    </div>
    <div class="wrapper-video__test-product">
      <iframe
        width="517px"
        height="290px"
        data-cookieconsent="marketing"
        src="https://www.youtube.com/embed/q6HnFv5QXjw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>
    <div class="wrapper-two__test-product">
      <p class="text__test-product">Tendenze ed innovazioni in agricoltura</p>
      <div>
        <a class="button-cta__test-product" href="${href}">Registrati ora</a>
      </div>
    </div>
  </div>
`;

wrapper.innerHTML = newSection;
