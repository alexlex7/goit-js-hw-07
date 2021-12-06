import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
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
const galleryMarkup = createMarkup(newGalleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkup(newGalleryItems) {
  const markup = newGalleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" loading="lazy" alt="${description}" />
</a>`;
    })
    .join("");
  return markup;
}

let gallery = new SimpleLightbox(".gallery__item");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;
