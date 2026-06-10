export function createHeroCard(item) {
	return `
    <section class="hero__content">
      <div class="hero__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h1 class="hero__title">${item.title}</h1>
    </section>
  `
}
