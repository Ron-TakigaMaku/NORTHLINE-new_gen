export function createManifestCard(item) {
	return `
		<section class="manifest__content">
      <div class="manifest__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h1 class="manifest__title">${item.title}</h1>
      <section class="hero-actions">
        <a href="#manifest" class="btn">Discover Our Story ↓</a>
      </section>
    </section>
	`
}
