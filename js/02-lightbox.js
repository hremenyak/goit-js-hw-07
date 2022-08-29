import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

galleryContainerRef.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

// galleryContainerRef.addEventListener("click", onGalleryContainerClick);

// function onGalleryContainerClick(event) {
//   event.preventDefault();
// }

var gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
