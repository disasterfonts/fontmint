export default function defaultGlyphs(glyphWidth = 5, glyphHeight = 5) {
	let glyphs = [
		defaultGlyphData("A", 0, glyphWidth, glyphHeight),
		defaultGlyphData("B", 1, glyphWidth, glyphHeight),
		defaultGlyphData("C", 2, glyphWidth, glyphHeight),
		defaultGlyphData("D", 3, glyphWidth, glyphHeight),
		defaultGlyphData("E", 4, glyphWidth, glyphHeight),
		defaultGlyphData("F", 5, glyphWidth, glyphHeight),
		defaultGlyphData("G", 6, glyphWidth, glyphHeight),
		defaultGlyphData("H", 7, glyphWidth, glyphHeight),
		defaultGlyphData("I", 8, glyphWidth, glyphHeight),
		defaultGlyphData("J", 9, glyphWidth, glyphHeight),
		defaultGlyphData("K", 10, glyphWidth, glyphHeight),
		defaultGlyphData("L", 11, glyphWidth, glyphHeight),
		defaultGlyphData("M", 12, glyphWidth, glyphHeight),
		defaultGlyphData("N", 13, glyphWidth, glyphHeight),
		defaultGlyphData("O", 14, glyphWidth, glyphHeight),
		defaultGlyphData("P", 15, glyphWidth, glyphHeight),
		defaultGlyphData("Q", 16, glyphWidth, glyphHeight),
		defaultGlyphData("R", 17, glyphWidth, glyphHeight),
		defaultGlyphData("S", 18, glyphWidth, glyphHeight),
		defaultGlyphData("T", 19, glyphWidth, glyphHeight),
		defaultGlyphData("U", 20, glyphWidth, glyphHeight),
		defaultGlyphData("V", 21, glyphWidth, glyphHeight),
		defaultGlyphData("W", 22, glyphWidth, glyphHeight),
		defaultGlyphData("X", 23, glyphWidth, glyphHeight),
		defaultGlyphData("Y", 24, glyphWidth, glyphHeight),
		defaultGlyphData("Z", 25, glyphWidth, glyphHeight),
		defaultGlyphData("0", 26, glyphWidth, glyphHeight),
		defaultGlyphData("1", 27, glyphWidth, glyphHeight),
		defaultGlyphData("2", 28, glyphWidth, glyphHeight),
		defaultGlyphData("3", 29, glyphWidth, glyphHeight),
		defaultGlyphData("4", 30, glyphWidth, glyphHeight),
		defaultGlyphData("5", 31, glyphWidth, glyphHeight),
		defaultGlyphData("6", 32, glyphWidth, glyphHeight),
		defaultGlyphData("7", 33, glyphWidth, glyphHeight),
		defaultGlyphData("8", 34, glyphWidth, glyphHeight),
		defaultGlyphData("9", 35, glyphWidth, glyphHeight),
	]
	return glyphs;
}

const createArray = length => [...Array(length)];

const defaultGlyphData = (name, glyphIndex = 0, glyphWidth = 5, glyphHeight = 5) => {
	const cellTotal = glyphWidth * glyphHeight
	let cells = createArray(cellTotal).map( (cell,i) => ({'id': i, 'status':Math.round(Math.random(1))}) )
	let glyph = {
		'glyphIndex': glyphIndex,
		'name': name,
		'cells': cells,
	}
	return glyph;
}