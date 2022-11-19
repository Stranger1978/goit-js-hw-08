// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageGalleryContainer = document.querySelector('.gallery');
const imageGalleryMarkup = createImageGalleryMarkup(galleryItems);  

let instance = '';

imageGalleryContainer.insertAdjacentHTML('beforeend', imageGalleryMarkup);
function createImageGalleryMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
     return  `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
     </a>
     </div>
     `;  
    }).join('');
}

// слухач кліку (перевірка на те, що клік саме по необхідній області)
imageGalleryContainer.addEventListener('click', onImageGalleryContainerClick);

function onImageGalleryContainerClick (evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')){
        return;
    }
    const originImage = evt.target.dataset.source;

    createModalWindow(originImage);
}
// функція відкриття модального вікна
function createModalWindow(originImage) {
    instance = basicLightbox.create(`<img src="${originImage}" width="800" height="600">`,
{onShow: () => window.addEventListener('keydown', onEscapeButtonKeyPress),
 onClose: () => window.addEventListener('keydown', onEscapeButtonKeyPress),
});
instance.show();
}
// слухач кліку на ЕСКЕЙП

function onEscapeButtonKeyPress(evt){
    if (evt.code !== 'Escape') {
        return;
    } 
   instance.close();   
} 

