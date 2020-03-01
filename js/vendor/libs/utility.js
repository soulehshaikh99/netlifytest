function removeAllElementsByQuery(query) {
	let elements = document.querySelectorAll(query);
	for (let i = 0; i < elements.length; i++)    document.body.removeChild(elements[i])
}

function copyToClipboardSync(element) {
	element.select();
	if (document.execCommand('copy')) console.log('Copied to clipboard!')
	else console.log('Cannot copy to clipboard!');
}

function copyToClipboardAsync(element) {
	navigator.clipboard.writeText(element.textContent)
		.then(() => console.log('Copied to clipboard!'))
		.catch(() => copyToClipboardSync(element));
}

function copyContentToClipboard(id, clipboardType)	{
	let element = document.getElementById(id);
	if (clipboardType === 'async-clipboard') copyToClipboardAsync(element);
	else copyToClipboardSync(element);
}