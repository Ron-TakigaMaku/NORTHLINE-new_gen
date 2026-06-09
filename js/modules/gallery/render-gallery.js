import { createGalleryCard } from '../../components/gallery-cards.js'
import { galleryData } from '../../data/gallery-data.js'

export function renderGallery() {
	const gallery = document.querySelector('.gallery__list')

	if (!gallery) return

	gallery.innerHTML = galleryData.map(item => createGalleryCard(item)).join('')
}
