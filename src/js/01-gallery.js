// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');



const markup = galleryItems.map(({ preview, original, description }) => {
return `<a class="gallery__item" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>`}).join('');

gallery.insertAdjacentHTML('beforeend', markup);


// function onGalleryClick(evt) {
//     evt.preventDefault();
//     const lightbox = 
new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

console.log(galleryItems);
