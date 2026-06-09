import { galleryData } from '../../data/gallery-data.js'

function createModalContent(item) {
	return `
    <img src="${item.img}" alt="NORTHLINE editorial" class="gallery-modal__img" />
  `
}

export function initGalleryModal() {
	const modal = document.getElementById('gallery-modal')
	const body = modal?.querySelector('.gallery-modal__body')
	const list = document.querySelector('.gallery__list')

	if (!modal || !body || !list) return

	list.addEventListener('click', e => {
		const btn = e.target.closest('[data-id]')
		if (!btn) return

		const id = Number(btn.dataset.id)
		const item = galleryData.find(p => p.id === id)
		if (!item) return

		body.innerHTML = createModalContent(item)
		modal.classList.add('modal--open')
		document.body.style.overflow = 'hidden'
	})

	function closeModal() {
		modal.classList.remove('modal--open')
		document.body.style.overflow = ''
	}

	modal
		.querySelector('.gallery-modal__overlay')
		?.addEventListener('click', closeModal)
	modal
		.querySelector('.gallery-modal__close')
		?.addEventListener('click', closeModal)

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') closeModal()
	})
}
