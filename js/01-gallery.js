import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryContainerRef.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

galleryContainerRef.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalLink = event.target.dataset.source;

  const markup = `
    <div class="modal">
    <img width="800" height="600" src="${originalLink}">
    </div>
`;

  const modal = basicLightbox.create(markup, {
    onShow: (modal) => {
      window.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
          modal.close();
        }
      });
    },
  });

  modal.show();
}
