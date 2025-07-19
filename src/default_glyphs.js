export default function defaultGlyphs(glyphWidth = 5, glyphHeight = 5) {
	let emptyCells = createArray(glyphWidth * glyphHeight).map( (cell, i) => {
		return { 'id': i, 'status': 0 }
	} );
	let glyphs = [
		randomGlyphData("A", "A", "0041", 0,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("B", "B", "0042", 1,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("C", "C", "0043", 2,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("D", "D", "0044", 3,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("E", "E", "0045", 4,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("F", "F", "0046", 5,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("G", "G", "0047", 6,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("H", "H", "0048", 7,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("I", "I", "0049", 8,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("J", "J", "004A", 9,  glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("K", "K", "004B", 10, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("L", "L", "004C", 11, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("M", "M", "004D", 12, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("N", "N", "004E", 13, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("O", "O", "004F", 14, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("P", "P", "0050", 15, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Q", "Q", "0051", 16, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("R", "R", "0052", 17, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("S", "S", "0053", 18, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("T", "T", "0054", 19, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("U", "U", "0055", 20, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("V", "V", "0056", 21, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("W", "W", "0057", 22, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("X", "X", "0058", 23, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Y", "Y", "0059", 24, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("Z", "Z", "005A", 25, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("0", "zero", "0030", 26, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("1", "one", "0031", 27, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("2", "two", "0032", 28, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("3", "three", "0033", 29, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("4", "four", "0034", 30, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("5", "five", "0035", 31, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("6", "six", "0036", 32, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("7", "seven", "0037", 33, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("8", "eight", "0038", 34, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("9", "nine", "0039", 35, glyphWidth, glyphHeight, false, false, true),
		
		initGlyphData(' ', 'space',       '0020', 36, glyphWidth, glyphHeight, false, false, true),
		initGlyphData('', 'grave',        '0060', 37, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('0060')),
		initGlyphData('', 'dieresis',     '00A8', 38, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00A8')),
		initGlyphData('', 'macron',       '00AF', 39, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00AF')),
		initGlyphData('', 'acute',        '00B4', 40, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00B4')),
		initGlyphData('', 'cedilla',      '00B8', 41, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('00B8')),
		initGlyphData('', 'circumflex',   '02C6', 42, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02C6')),
		initGlyphData('', 'caron',        '02C7', 43, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02C7')),
		initGlyphData('', 'breve',        '02D8', 44, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02D8')),
		initGlyphData('', 'dotaccent',    '02D9', 45, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02D9')),
		initGlyphData('', 'ring',         '02DA', 46, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DA')),
		initGlyphData('', 'ogonek',       '02DB', 47, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DB')),
		initGlyphData('', 'tilde',        '02DC', 48, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DC')),
		initGlyphData('', 'hungarumlaut', '02DD', 49, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('02DD')),
		initGlyphData('', 'commaaccent',  '0326', 50, glyphWidth, glyphHeight, false, true, false, accentGlyphDefaults('0326')),
		
		
		initGlyphData(".", "period",      "002E", 51, glyphWidth, glyphHeight, false, false, true),
		initGlyphData(",", "comma",       "002C", 52, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("/", "slash",       "002F", 53, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("!", "exclam",      "0021", 54, glyphWidth, glyphHeight, false, false, true),
		
		initGlyphData("\"", "quotedbl",   "0022", 55, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("'", "quotesingle", "0027", 56, glyphWidth, glyphHeight, false, false, true),
		initGlyphData(":", "colon",       "003A", 57, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("@", "at",          "0040", 58, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("#", "numbersign",  "0023", 59, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("%", "percent",     "0025", 60, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("^", "asciicircum", "005E", 61, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("&", "ampersand", "0026", 62, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("*", "asterisk",    "002A", 63, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("(", "parenleft",   "0028", 64, glyphWidth, glyphHeight, false, false, true),
		initGlyphData(")", "parenright",  "0029", 65, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("-", "hyphen",      "002D", 66, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("=", "equal",       "003D", 67, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("_", "underscore",  "005F", 68, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("+", "plus",        "002B", 69, glyphWidth, glyphHeight, false, false, true),
		randomGlyphData("?", "question",  "003F", 70, glyphWidth, glyphHeight, false, false, true),
		
		initGlyphData("£", "sterling",    "00A3", 71, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("€", "euro",        "20AC", 72, glyphWidth, glyphHeight, false, false, true),
		initGlyphData("$", "dollar",      "0024", 73, glyphWidth, glyphHeight, false, false, true),
	]
	return glyphs;
}

const createArray = length => [...Array(length)];

const randomGlyphData = (nicename, name, unicode = "0000", glyphIndex = 0, glyphWidth = 5, glyphHeight = 5, composite = false, accentSource = false, visible = true) => {
	const cellTotal = glyphWidth * glyphHeight
	let cells = createArray(cellTotal).map( (cell,i) => ({'id': i, 'status':Math.round(Math.random(1))}) )
	let glyph = {
		'unicode': unicode,
		'glyphIndex': glyphIndex,
		'glyphName': name,
		'glyphNiceName': nicename,
		'composite': composite,
		'accentSource': accentSource,
		'visible': visible,
		'cells': cells,
	}
	return glyph;
}

const initGlyphData = (nicename, name, unicode = "0000", glyphIndex = 0, glyphWidth = 5, glyphHeight = 5, composite = false, accentSource = false, visible = true, cells = false) => {
	const cellTotal = glyphWidth * glyphHeight
	let emptyCells = createArray(glyphWidth * glyphHeight).map( (cell, i) => {
		return { 'id': i, 'status': 0 }
	} );
	let glyph = {
		'unicode': unicode,
		'glyphIndex': glyphIndex,
		'glyphName': name,
		'glyphNiceName': nicename,
		'composite': composite,
		'accentSource': accentSource,
		'visible': visible,
		'cells': cells ? cells : emptyCells,
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
		case '0060': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1,1,0,0,0, 0,1,0,0,0]; break; // grave
		case '00A8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1,0,1,0,0, 1,0,1,0,0]; break; // dieresis
		case '00AF': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1]; break; // macron
		case '00B4': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,1,0,0, 0,1,0,0,0]; break; // acute
		case '00B8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0, 1,1,0,0,0]; break; // cedilla
		case '02C6': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0, 1,1,1,0,0]; break; // circumflex
		case '02C7': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1,1,1,0,0, 0,1,0,0,0]; break; // caron
		case '02D8': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 1,0,1,0,0, 0,1,0,0,0]; break; // breve
		case '02D9': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,1,0,0, 0,1,1,0,0]; break; // dotaccent
		case '02DA': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0, 1,0,1,0,0, 0,1,0,0,0]; break; // ring
		case '02DB': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0, 0,0,1,1,0]; break; // ogonek
		case '02DC': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,1,0,0, 1,1,0,0,0]; break; // tilde
		case '02DD': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,1,0, 1,0,1,0,0]; break; // hungarumlaut
		case '0326': accentGlyphCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0, 0,1,0,0,0]; break; // commaaccent
		}
	
	return accentGlyphCells.map( (cell, i) => ({'id': i, 'status': cell }) );

}