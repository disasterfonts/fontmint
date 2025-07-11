import React, { useState, createContext, useContext } from 'react';
import defaultGlyphData from '../default_glyphs';

const GlyphsContext = createContext();
export const useGlyphs = () => useContext(GlyphsContext);

export default function GlyphsProvider({ children }) {
	
	const [glyphs, setGlyphs] = useState(defaultGlyphData());
	const [currentGlyph, setCurrentGlyph] = useState(0);
	const [dragStatus, setDragStatus] = useState(0);
	const [dragColour, setDragColour] = useState(1);
	const [fontName, setFontName] = useState('fonto');
	const [fontDimensions, setFontDimensions] = useState({'width':5,'height':5});
	const [previewStringCanvas, setPreviewStringCanvas] = useState('ABCDEF');
	const [previewGlyphsCanvas, setPreviewGlyphsCanvas] = useState([glyphs[0], glyphs[1], glyphs[2], glyphs[3], glyphs[4], glyphs[5]]);
	
	// font index panel -------------------------------------------------------------------------------------------------------
	
	const updateGlyphs = (newGlyphs) => setGlyphs(newGlyphs)
	
	const selectGlyph = (glyphIndex) => setCurrentGlyph(glyphIndex)
	
	
	// editor panel -----------------------------------------------------------------------------------------------------------
	
	const toggleCell = (glyphIndex, id) => {
		
		setDragStatus(0)
		
		// glyphs may need to be an object for quick indexing?
		// get glyphs
		// get glyph's cells
		// toggle cell id, put back in glyph
		// put glyph back in glyphs
		// setGlyphs with modified glyphs
		let newGlyphs = glyphs.map(glyph => glyph);
		const newCells = newGlyphs[glyphIndex].cells.map((cell, i) => {
			if (cell.id == id) {
				cell.status = 1 - cell.status; // invert cell
			}
			return cell;
		});
		
		newGlyphs[glyphIndex].cells = newCells;
		
		setGlyphs(newGlyphs);
	}
	
	const updateDragStatus = (status, colour) => {
		//console.log('dragging:' + status, 'colour:' + colour)
		setDragColour(colour)
		setDragStatus(status)
	}
	
	const updateDragDraw = (glyphIndex, id) => {
		if (dragStatus) {
			//console.log('painting:' + dragColour)
			
			let newGlyphs = glyphs.map(glyph => glyph);
			const newCells = newGlyphs[glyphIndex].cells.map((cell, i) => {
				if (cell.id == id) {
					cell.status = dragColour;
				}
				return cell;
			});
			newGlyphs[glyphIndex].cells = newCells;
			setGlyphs(newGlyphs);
		}
	}
	const clearCells = (glyphIndex) => {
		let emptyCells = glyphs[glyphIndex].cells.map( (cell, i) => {
			return {'id': i, 'status': 0 }
		})

		let newGlyphs = glyphs.map((glyph,i) => glyph.glyphIndex == glyphIndex ? { ...glyph, 'cells': emptyCells } : glyph )
		setGlyphs(newGlyphs)
	}
	
	const randomCells = (glyphIndex) => {
		let newRandomCells = glyphs[glyphIndex].cells.map( (cell, i) => {
			return {'id': i, 'status': Math.round(Math.random()) }
		})

		let newGlyphs = glyphs.map((glyph,i) => glyph.glyphIndex == glyphIndex ? { ...glyph, 'cells': newRandomCells } : glyph )
		setGlyphs(newGlyphs)
	}
	
	
	// font settings panel ----------------------------------------------------------------------------------------------------
	
	const updateFontName = (newValue) => {
		setFontName(newValue);
		return newValue;
	}
	
	
	const updateFontDimensions = (dimension, newValue) => {
		const createArray = length => [...Array(length)];
		var newGlyphs;
		
		if (dimension === 'width') {
			let xdifference = 0;
			let newGlyphs = createArray(newValue * fontDimensions.height);
			
			newGlyphs = glyphs.map((glyph, i) => {
				if (fontDimensions.width < newValue) {
					// grow
					for (let y=0; y<fontDimensions.height; y++) {
						xdifference = newValue - fontDimensions.width;
						for (let x = 0; x<xdifference; x++) {
							// splice in x difference at end of each row
							// column 'width' shifts with the xdiff every row
							glyph.cells.splice((fontDimensions.width * (y+1)) + (y*xdifference), 0, {'id': i, 'status': 0});
						}
					}
				} else {
					// shrink
					for (let y=0; y<fontDimensions.height; y++) {
						xdifference = fontDimensions.width - newValue;
						for (let x = 0; x<xdifference; x++) {
							glyph.cells.splice( ((fontDimensions.width * (y+1))-1) - (y*xdifference), 1);
						}
					}
				}
				var newGlyphCells = glyph.cells.map( (cell,i) => ({'id': i, 'status': cell.status}))
				glyph.cells = newGlyphCells
				return glyph
			})
			setGlyphs(newGlyphs);
			setFontDimensions({ 'width': newValue, 'height': fontDimensions.height })
		} else {
			let newGlyphs = createArray(newValue * fontDimensions.height);
			
			newGlyphs = glyphs.map((glyph, i) => {
				if (fontDimensions.height < newValue) {
					// grow
					for (let x=0; x<fontDimensions.width; x++) {
						glyph.cells.push({'id': i, 'status': 0});
					}

				} else {
					// shrink
					for (let x=0; x<fontDimensions.width; x++) {
						glyph.cells.pop();
					}
				}
				var newGlyphCells = glyph.cells.map( (cell,i) => ({'id': i, 'status': cell.status}))
				glyph.cells = newGlyphCells
				return glyph
			})
			
			setGlyphs(newGlyphs);
			//setGlyphs(defaultGlyphs(fontDimensions.width, newValue));
			setFontDimensions({ 'width': fontDimensions.width, 'height': newValue })
		}
		// update form input
		return newValue;
	}
	
	
	// preview panel ----------------------------------------------------------------------------------------------------------
	
	const glyphFind = (glyphs = [], glyphName = "A") => {
		// locate glyph in array by child object property glyphName
		for (const glyph of glyphs) {
			const result = glyph.glyphName === glyphName ? glyph : glyphFind(glyph.children, glyphName);
			if(result) return result;
		}
	}
	const changePreviewStringCanvas = (inputTextValue) => {
		let newPreviewString = inputTextValue.toUpperCase()
		setPreviewStringCanvas(newPreviewString)
		let newPreviewGlyphs = []
		if (newPreviewString.length > 0) {
			for (let n=0; n<newPreviewString.length; n++) {
				if (newPreviewString[n] != " " && ((newPreviewString[n].charCodeAt(0) >= 65 && newPreviewString[n].charCodeAt(0) <= 90) || (newPreviewString[n].charCodeAt(0) >= 48 && newPreviewString[n].charCodeAt(0) <= 57)) ) {
					newPreviewGlyphs[n] = glyphFind(glyphs, newPreviewString[n]);
				} else {
					newPreviewGlyphs[n] = glyphFind(glyphs, 'space');
				}
			}
		}
		setPreviewGlyphsCanvas(newPreviewGlyphs)
	}


	return (
		<GlyphsContext.Provider value={{
			glyphs,
			fontName,
			updateFontName,
			fontDimensions,
			updateFontDimensions,
			currentGlyph,
			updateGlyphs,
			selectGlyph,
			toggleCell,
			updateDragStatus,
			updateDragDraw,
			clearCells,
			randomCells,
			glyphFind,
			previewStringCanvas,
			previewGlyphsCanvas,
			changePreviewStringCanvas }}>
			{ children }
		</GlyphsContext.Provider>
	)
}