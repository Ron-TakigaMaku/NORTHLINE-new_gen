export function createGalleryCard(item) {
	return `
    <li class="gallery__item">
      <button class="gallery__btn" data-id="${item.id}">
        <img src="${item.img}" alt="NORTHLINE editorial" />
      </button>
       <div id="gallery-modal">
        <div class="gallery-modal__overlay"></div>
        <div class="gallery-modal__window">
          <button class="gallery-modal__close">✕</button>
          <div class="gallery-modal__body"></div>
        </div>
    </div>
    </li>
  `
}
