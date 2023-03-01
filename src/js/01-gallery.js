// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);
const qs = (selector) => document.querySelector(selector);
const galleryElements = qs(".gallery");

const creatingItems = (item) => {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-photo="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
		})
		.join("");
};
console.log(galleryItems);
const imagesMarkup = creatingItems(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);

const onClick = (event) => {
	event.preventDefault();

	if (event.target.classList.contains("gallery")) return;
	const source = event.target.dataset.photo;
	const instance = basicLightbox.create(
		`<img src="${source}" width="900" height="500">`,
	);

	instance.show();

	galleryElements.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			instance.close();
		}
	});
};

galleryElements.addEventListener("click", onClick);
