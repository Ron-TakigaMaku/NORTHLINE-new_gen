export function createGalleryCard(item) {
	return `
    <section class="gallery__content">
      <div class="gallery__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <section class="gallery-actions">
        <a href="#story" class="btn">Discover Our Story ↓</a>
      </section>
    </section>
  `
}
