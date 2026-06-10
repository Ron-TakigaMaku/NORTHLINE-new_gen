import { createCard } from '../../../js/components/about-cards.js'
import { aboutData } from '../../../js/data/about-data.js'

export const renderAbout = () => {
	const container = document.querySelector('.about__track')
	if (!container) return
	container.innerHTML = aboutData.map(createCard).join('')
}
