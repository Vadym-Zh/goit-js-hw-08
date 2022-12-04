// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
       </li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
