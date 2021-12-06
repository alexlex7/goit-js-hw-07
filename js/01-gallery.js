import { galleryItems } from "./gallery-items.js";
// Change code below this line
const newGalleryItems = galleryItems.concat(
  Array(51)
    .fill("")
    .map((item, index) => {
      return {
        preview: `https://picsum.photos/seed/picsum${index}/510/340?random=${index}.jpg`,
        original: `https://picsum.photos/seed/picsum${index}/1280/854?random=${index}.jpg`,
        description: "Hokkaido Flower",
      };
    })
);
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(newGalleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(newGalleryItems) {
  const markup = newGalleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  return markup;
}

function showModal() {
  galleryEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
      return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    const visible = instance.visible();

    if (visible) {
      document.addEventListener("keydown", onPressEscHandler);
      function onPressEscHandler({ code }) {
        if (code === "Escape") {
          instance.close();
          document.removeEventListener("keydown", onPressEscHandler);
        }
      }
    }
  });
}

showModal();
