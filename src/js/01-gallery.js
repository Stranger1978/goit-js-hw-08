// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageGalleryContainer = document.querySelector('.gallery');
const imageGalleryMarkup = createImageGalleryMarkup(galleryItems);  

imageGalleryContainer.insertAdjacentHTML('beforeend', imageGalleryMarkup);
function createImageGalleryMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
     return  `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
     `;  
    }).join('');
}

imageGalleryContainer.addEventListener('click', onImageGalleryContainerClick);

function onImageGalleryContainerClick (evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')){
        return;
    }
 //   const originImage = evt.target.dataset.source;

    createImageSlideShowlWindow();
}

function createImageSlideShowlWindow() {
const lightbox = new SimpleLightbox('.gallery a', 
{ captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  
});
}