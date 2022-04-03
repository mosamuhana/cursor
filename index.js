const { addExitHook } = require('@devteks/exit-hook');

const SHOW = '\u001B[?25h';
const HIDE = '\u001B[?25l';
const CURSOR = Symbol('CURSOR');

function isTTY(stream) {
	return !!stream && !!stream.isTTY;
}

function isHidden(stream) {
	return typeof stream[CURSOR] !== 'undefined';
}

function showCursor(stream = process.stderr) {
	if (isTTY(stream) && isHidden(stream)) {
		const cb = stream[CURSOR];
		stream.write(SHOW);
		delete stream[CURSOR];
		cb();
	}
}

function hideCursor(stream = process.stderr) {
	if (isTTY(stream) && !isHidden(stream)) {
		stream.write(HIDE);
		stream[CURSOR] = addExitHook(() =>{
			delete stream[CURSOR];
			stream.write(SHOW);
		});
	}
}

function toggleCursor(stream = process.stderr) {
	if (isTTY(stream)) {
		if (isHidden(stream)) {
			showCursor(stream);
		} else {
			hideCursor(stream);
		}
	}
}

module.exports = { showCursor, hideCursor, toggleCursor };
