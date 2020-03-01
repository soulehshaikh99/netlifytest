function loadImageBackend(img)	{
	const src = img.getAttribute(OLD_IMAGE_ATTRIBUTE_TO_BE_REMOVED);
	img.setAttribute('src', src);
	img.removeAttribute('data-webp');
	img.removeAttribute('data-png');
}

function preloadImage(img)	{
	loadImageBackend(img);
	img.removeAttribute('loading');
	imgObserver.unobserve(img);
}

function runIfNativeLazyLoadingIsSupported(images)	{
	for(let i = 0; i < images.length; i++)	loadImageBackend(images[i]);
}

const imgObserver = new IntersectionObserver(entries => {
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (!entry.isIntersecting) return;
		else preloadImage(entry.target);
	}
},
	{
		threshold: 0,
		root: document.querySelector('#container'),
		rootMargin: "0px 0px 0px 0px"
	}
);

function renderImages(images)	{
	for (let i = 0; i < images.length; i++) imgObserver.observe(images[i]);
};