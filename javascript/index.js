onUiLoaded(() => {
	// txt2img and img2img tools are created as a row. With Python, we can only create
	// our button before the row, not within the row. This will move the format button
	// into the row.
	const tools = gradioApp().querySelectorAll('div[id$="_tools"]');
	for (let i = 0; i < tools.length; i++) {
		const toolsRow = tools[i].querySelector('div:first-of-type');
		const formatBtn = tools[i].querySelector('button#format');
		toolsRow.insertBefore(formatBtn, toolsRow.lasttChild);
		formatBtn.title = 'Format prompt';
	}

	// Hide Lobe Theme 'Format prompt~🪄' buttons
	const pollInterval = setInterval(() => {
		const lobeFormatBtn = gradioApp().querySelectorAll('button[id$="_formatconvert"]');
		if (lobeFormatBtn) {
			for (let i = 0; i < lobeFormatBtn.length; ++i) {
				lobeFormatBtn[i].style.display = 'none';
			}
			clearInterval(pollInterval);
		}
	}, 100);
});
