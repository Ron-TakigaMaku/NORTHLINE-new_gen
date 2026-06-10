export function createManifestCard(item) {
	return `
		<section class="manifest__content">
      <div class="manifest__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h1 class="manifest__title">${item.title}</h1>
    </section>
	`
}
