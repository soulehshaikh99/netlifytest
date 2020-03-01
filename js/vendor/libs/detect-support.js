const ClipboardAvailability = new Promise((resolve, reject) => {

    if (navigator.clipboard) resolve('async-clipboard');

    const textarea = document.createElement('textarea');
    textarea.style.display = 'none';
    document.body.appendChild(textarea);

    if (typeof textarea.focus === 'function' &&
        typeof textarea.select === 'function' &&
        typeof document.execCommand === 'function') {
        document.body.removeChild(textarea);
        resolve('sync-clipboard');
    }

    reject('no-clipboard');
});

function lazyLoadingSupportAvailability()	{
	return 'loading' in document.createElement('img');
};