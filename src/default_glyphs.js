export default function defaultGlyphs(glyphWidth = 5, glyphHeight = 5) {
	let spaceCells = createArray(glyphWidth * glyphHeight).map( (cell, i) => 0);
	let glyphs = [
		defaultGlyphData("A", "0041", 0, glyphWidth, glyphHeight),
		defaultGlyphData("B", "0042", 1, glyphWidth, glyphHeight),
		defaultGlyphData("C", "0043", 2, glyphWidth, glyphHeight),
		defaultGlyphData("D", "0044", 3, glyphWidth, glyphHeight),
		defaultGlyphData("E", "0045", 4, glyphWidth, glyphHeight),
		defaultGlyphData("F", "0046", 5, glyphWidth, glyphHeight),
		defaultGlyphData("G", "0047", 6, glyphWidth, glyphHeight),
		defaultGlyphData("H", "0048", 7, glyphWidth, glyphHeight),
		defaultGlyphData("I", "0049", 8, glyphWidth, glyphHeight),
		defaultGlyphData("J", "004A", 9, glyphWidth, glyphHeight),
		defaultGlyphData("K", "004B", 10, glyphWidth, glyphHeight),
		defaultGlyphData("L", "004C", 11, glyphWidth, glyphHeight),
		defaultGlyphData("M", "004D", 12, glyphWidth, glyphHeight),
		defaultGlyphData("N", "004E", 13, glyphWidth, glyphHeight),
		defaultGlyphData("O", "004F", 14, glyphWidth, glyphHeight),
		defaultGlyphData("P", "0050", 15, glyphWidth, glyphHeight),
		defaultGlyphData("Q", "0051", 16, glyphWidth, glyphHeight),
		defaultGlyphData("R", "0052", 17, glyphWidth, glyphHeight),
		defaultGlyphData("S", "0053", 18, glyphWidth, glyphHeight),
		defaultGlyphData("T", "0054", 19, glyphWidth, glyphHeight),
		defaultGlyphData("U", "0055", 20, glyphWidth, glyphHeight),
		defaultGlyphData("V", "0056", 21, glyphWidth, glyphHeight),
		defaultGlyphData("W", "0057", 22, glyphWidth, glyphHeight),
		defaultGlyphData("X", "0058", 23, glyphWidth, glyphHeight),
		defaultGlyphData("Y", "0059", 24, glyphWidth, glyphHeight),
		defaultGlyphData("Z", "005A", 25, glyphWidth, glyphHeight),
		defaultGlyphData("0", "0030", 26, glyphWidth, glyphHeight),
		defaultGlyphData("1", "0031", 27, glyphWidth, glyphHeight),
		defaultGlyphData("2", "0032", 28, glyphWidth, glyphHeight),
		defaultGlyphData("3", "0033", 29, glyphWidth, glyphHeight),
		defaultGlyphData("4", "0034", 30, glyphWidth, glyphHeight),
		defaultGlyphData("5", "0035", 31, glyphWidth, glyphHeight),
		defaultGlyphData("6", "0036", 32, glyphWidth, glyphHeight),
		defaultGlyphData("7", "0037", 33, glyphWidth, glyphHeight),
		defaultGlyphData("8", "0038", 34, glyphWidth, glyphHeight),
		defaultGlyphData("9", "0039", 35, glyphWidth, glyphHeight),
		{'glyphName': 'space', 'glyphIndex': 36, 'unicode':'0020', 'cells': spaceCells}
	]
	return glyphs;
}

const createArray = length => [...Array(length)];

const defaultGlyphData = (name, unicode = "0000", glyphIndex = 0, glyphWidth = 5, glyphHeight = 5) => {
	const cellTotal = glyphWidth * glyphHeight
	let cells = createArray(cellTotal).map( (cell,i) => ({'id': i, 'status':Math.round(Math.random(1))}) )
	let glyph = {
		'unicode': unicode,
		'glyphIndex': glyphIndex,
		'glyphName': name,
		'cells': cells,
	}
	return glyph;
}