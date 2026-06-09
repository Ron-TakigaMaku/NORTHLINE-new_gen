export function createGalleryCard(item) {
	return `
    <li class="gallery__item">
      <button class="gallery__btn" data-id="${item.id}">
        <img src="${item.img}" alt="NORTHLINE editorial" />
      </button>
    </li>
  `
}
