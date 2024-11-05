const fn = () => {
	const elem = document.querySelector('h6[data-testid="guides-left-banner"]');
	if (!elem) return null;

	const txt = elem.innerHTML;
	const capture = /.*(\d).*/g;
	const arr = capture.exec(txt);
	if (!arr) return null;

	if (Number(arr[1]) < 2) {
		window.localStorage.clear();
		console.log("Reset free guide limit. Happy reading!");
	}
}

setInterval(fn, 10000);

fn();