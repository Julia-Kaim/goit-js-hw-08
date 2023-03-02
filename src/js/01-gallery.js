// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/common.css";
import "../css/01-gallery.css";

console.log(galleryItems);
const qs = (selector) => document.querySelector(selector);
const galleryElements = qs(".gallery");

const itemsMarkup = (item) => {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
		})
		.join("");
};

const imagesMarkup = itemsMarkup(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	captionType: "alt",
});
