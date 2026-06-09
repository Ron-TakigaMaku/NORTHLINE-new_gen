import { createManifestCard } from '../../components/manifest-cards.js'
import { manifestData } from '../../data/manifest-data.js'

export function renderManifest() {
	const manifest = document.querySelector('.manifest__list')

	if (!manifest) return

	manifest.innerHTML = manifestData
		.map(item => createManifestCard(item))
		.join('')
}
