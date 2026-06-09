import { initGalleryModal } from '../modules/gallery/gallery-modal.js'
import { renderGallery } from '../modules/gallery/render-gallery.js'
import { renderHero } from '../modules/hero/render-hero.js'
import { renderManifest } from '../modules/manifest/render-manifest.js'

function initRevealAnimation() {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in')

					observer.unobserve(entry.target)
				}
			})
		},
		{
			threshold: 0.15,
		},
	)

	document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

document.addEventListener('DOMContentLoaded', () => {
	renderHero()
	renderManifest()
	renderGallery()
	initGalleryModal()
	initRevealAnimation()
})
