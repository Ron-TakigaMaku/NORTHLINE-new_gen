export function createFindUsCard(findUs) {
	return `
		<div class="find-us__info">
			<p class="find-us__label">Find Us</p>
			<h2 class="find-us__title">${findUs.label}</h2>
			<ul class="find-us__list">
				<li class="find-us__item">
				<span>${findUs.title}</span>
				</li>
				<li class="find-us__item">
					<span class="find-us__icon">🕐</span>
					<span>${findUs.hours.map(h => `<li class="find-us__item"><span class="find-us__icon">🕐</span><span>${h}</span></li>`).join('')}</span>
				</li>
				<li class="find-us__item">
					<span class="find-us__icon">✉️</span>
					<span>${findUs.email}</span>
				</li>
			</ul>
		</div>

		<div class="find-us__map">
			<iframe src="${findUs.mapSrc}" width="100%" height="100%" style="border:0" loading="lazy"></iframe>
		</div>
	`
}
