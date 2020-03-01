let IS_WEBP_SUPPORTED = false;
let OLD_IMAGE_ATTRIBUTE_TO_BE_REMOVED = 'data-webp';
let CLIPBOARD_SUPPORT_TYPE = 'no-clipboard';

Modernizr.on('webplossless', (result) => {
	IS_WEBP_SUPPORTED = result;
	OLD_IMAGE_ATTRIBUTE_TO_BE_REMOVED = (IS_WEBP_SUPPORTED) ? 'data-webp' : 'data-png';
	let images = document.querySelectorAll("[data-webp]");
	if (IS_LAZY_LOADING_SUPPORTED) runIfNativeLazyLoadingIsSupported(images);
	else renderImages(images);
});

ClipboardAvailability
	.then(response => {
		CLIPBOARD_SUPPORT_TYPE = response;
		document.dispatchEvent(assign_copy_event);
	})
	.catch(() => removeAllElementsByQuery('[btn-type="copy-code"]'));

// The backend is ready, it needs to be connected with the GUI (HTML and CSS)
// window.addEventListener('offline', () => {
// 	console.log('It seems like you have lost Internet Connection.');
// });

// window.addEventListener('online', () => {
// 	console.log('You\'ve connected to the Internet again.');
// });