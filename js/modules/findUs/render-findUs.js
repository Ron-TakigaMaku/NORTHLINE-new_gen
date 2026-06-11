import { createFindUsCard } from '../../components/findUs-cards.js'
import { findUsData } from '../../data/findUs-data.js'

export function renderFindUs() {
	const container = document.querySelector('.find-us__wrapper')
	if (!container) return
	container.innerHTML = createFindUsCard(findUsData)
}
