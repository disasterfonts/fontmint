export default function defaultGlyphs(glyphWidth = 5, glyphHeight = 5) {
	let spaceCells = createArray(glyphWidth * glyphHeight).map( (cell, i) => 0);
	let glyphs = [
		randomGlyphData("A", "0041", 0,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("B", "0042", 1,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("C", "0043", 2,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("D", "0044", 3,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("E", "0045", 4,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("F", "0046", 5,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("G", "0047", 6,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("H", "0048", 7,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("I", "0049", 8,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("J", "004A", 9,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("K", "004B", 10, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("L", "004C", 11, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("M", "004D", 12, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("N", "004E", 13, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("O", "004F", 14, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("P", "0050", 15, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Q", "0051", 16, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("R", "0052", 17, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("S", "0053", 18, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("T", "0054", 19, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("U", "0055", 20, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("V", "0056", 21, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("W", "0057", 22, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("X", "0058", 23, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Y", "0059", 24, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Z", "005A", 25, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("0", "0030", 26, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("1", "0031", 27, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("2", "0032", 28, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("3", "0033", 29, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("4", "0034", 30, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("5", "0035", 31, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("6", "0036", 32, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("7", "0037", 33, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("8", "0038", 34, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("9", "0039", 35, glyphWidth, glyphHeight, false, false, true),
		
		initGlyphData('space',        '0020', 36, glyphWidth, glyphHeight, false, false, true, spaceCells),
		initGlyphData('grave',        '0060', 37, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('0060')),
		initGlyphData('dieresis',     '00A8', 38, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00A8')),
		initGlyphData('macron',       '00AF', 39, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00AF')),
		initGlyphData('acute',        '00B4', 40, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00B4')),
		initGlyphData('cedilla',      '00B8', 41, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00B8')),
		initGlyphData('circumflex',   '02C6', 42, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02C6')),
		initGlyphData('caron',        '02C7', 43, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02C7')),
		initGlyphData('breve',        '02D8', 44, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02D8')),
		initGlyphData('dotaccent',    '02D9', 45, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02D9')),
		initGlyphData('ring',         '02DA', 46, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DA')),
		initGlyphData('ogonek',       '02DB', 47, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DB')),
		initGlyphData('tilde',        '02DC', 48, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DC')),
		initGlyphData('hungarumlaut', '02DD', 49, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DD')),
		initGlyphData('commaaccent',  '0326', 50, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('0326')),
	]
	return glyphs;
}

const createArray = length => [...Array(length)];

const randomGlyphData = (name, unicode = "0000", glyphIndex = 0, glyphWidth = 5, glyphHeight = 5, composite = false, accentSource = false, visible = true) => {
	const cellTotal = glyphWidth * glyphHeight
	let cells = createArray(cellTotal).map( (cell,i) => ({'id': i, 'status':Math.round(Math.random(1))}) )
	let glyph = {
		'unicode': unicode,
		'glyphIndex': glyphIndex,
		'glyphName': name,
		'composite': composite,
		'accentSource': accentSource,
		'visible': visible,
		'cells': cells,
	}
	return glyph;
}

const initGlyphData = (name, unicode = "0000", glyphIndex = 0, glyphWidth = 5, glyphHeight = 5, composite = false, accentSource = false, visible = true, cells = []) => {
	const cellTotal = glyphWidth * glyphHeight
	let glyph = {
		'unicode': unicode,
		'glyphIndex': glyphIndex,
		'glyphName': name,
		'composite': composite,
		'accentSource': accentSource,
		'visible': visible,
		'cells': cells,
	}
	return glyph;
}



const accentGlyphs = [
	'0060', // grave
	'00A8', // dieresis
	'00AF', // macron
	'00B4', // acute
	'00B8', // cedilla
	'02C6', // circumflex
	'02C7', // caron
	'02D8', // breve
	'02D9', // dotaccent
	'02DA', // ring
	'02DB', // ogonek
	'02DC', // tilde
	'02DD', // hungarumlaut
	'0326', // commaaccent
]


const accentGlyphDefaults = (unicode = '0060') => {
	var accentGlyphCells = []
	switch(unicode) {
		case '0060': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,1,0,0, 0,0,1,0,0]; break; // grave
		case '00A8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,1,0, 0,1,0,1,0]; break; // dieresis
		case '00AF': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0, 0,1,1,1,0]; break; // macron
		case '00B4': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,1,0, 0,0,1,0,0]; break; // acute
		case '00B8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0, 0,1,1,0,0]; break; // cedilla
		case '02C6': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0, 0,1,1,1,0]; break; // circumflex
		case '02C7': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,1,1,0, 0,0,1,0,0]; break; // caron
		case '02D8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,1,0, 0,0,1,0,0]; break; // breve
		case '02D9': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,1,0, 0,0,1,1,0]; break; // dotaccent
		case '02DA': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0, 0,1,0,1,0, 0,0,1,0,0]; break; // ring
		case '02DB': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1, 0,0,0,1,1]; break; // ogonek
		case '02DC': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,1,0, 0,1,1,0,0]; break; // tilde
		case '02DD': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,1, 0,1,0,1,0]; break; // hungarumlaut
		case '0326': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,1,0, 0,0,1,0,0]; break; // commaaccent
		}
	
	return accentGlyphCells.map( (cell, i) => ({'id': i, 'status': cell }) );

}