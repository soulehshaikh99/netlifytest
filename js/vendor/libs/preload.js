let IS_LAZY_LOADING_SUPPORTED = lazyLoadingSupportAvailability();

document.addEventListener('assign-copy', function()	{
	const btns = document.querySelectorAll('[btn-type="copy-code"]');
	if (btns.length === 0) return;
	for (let i = 0; i < btns.length; i++) {
		if (btns[i].getAttribute('clip-func')) continue;
		btns[i].addEventListener('click', () =>
			copyContentToClipboard(btns[i].getAttribute('clip-target'), CLIPBOARD_SUPPORT_TYPE))
		btns[i].setAttribute('clip-func', true);
	}
});

if (!IS_LAZY_LOADING_SUPPORTED) {
	window.addEventListener('DOMContentLoaded', () => {
		setTimeout(() => {
			// Scroll to top functionality missing
		}, 0);
	});
}