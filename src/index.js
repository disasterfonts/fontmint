import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import FontSettingsPanel from './components/FontSettingsPanel'
import EditorPanel from './components/EditorPanel'
import FontIndexPanel from './components/FontIndexPanel'
import PreviewPanel from './components/PreviewPanel'
import ExportPanel from './components/ExportPanel'

import './less/stylesy.less'
import cellInitData from "./default_cells.json"
import defaultGlyphs from "./default_glyphs.js"


let defaultGlyphData = defaultGlyphs(5,5); // width/height

export default function App() {

	const [glyphs, setGlyphs] = useState(defaultGlyphData);
	const [fontDimensions, setFontDimensions] = useState({'width':5,'height':5});
	const [fontName, setFontName] = useState('fonto');
	const [currentGlyph, setCurrentGlyph] = useState(0);
	const [dragStatus, setDragStatus] = useState(0);
	const [dragColour, setDragColour] = useState(1);
	//const [previewString, setPreviewSting] = useState('JACKDAWS LOVE MY BIG SPHINX OF QUARTZ');
	
	return (
		<section>
			<h1>mint pixel font editor</h1>
			
			<FontSettingsPanel 
				width={fontDimensions.width}
				height={fontDimensions.height}
				updateDimensions = { (dimension, newValue) => {
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
				}
				fontName={ fontName }
				updateFontName = { (newValue) => {
					setFontName(newValue);
					return newValue;
					}
				}
			/>
			
			<EditorPanel 
				glyph={ glyphs[currentGlyph] }
				glyphIndex = { currentGlyph }
				width = { fontDimensions.width }
				height = { fontDimensions.height }
				toggle = { (glyphIndex, id) => {
					
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
				}
				dragstatus = { (status, colour) => {
					//console.log('dragging:' + status, 'colour:' + colour)
					setDragColour(colour)
					setDragStatus(status)
					}
				}
				dragdraw = { (glyphIndex, id) => {
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
				}
				clearCells = { (glyphIndex) => {
					let emptyCells = glyphs[glyphIndex].cells.map( (cell, i) => {
						return {'id': i, 'status': 0 }
					})

					let newGlyphs = glyphs.map((newGlyph,i) => newGlyph.glyphIndex == glyphIndex? { 'glyphName': newGlyph.glyphName, 'unicode': newGlyph.unicode, 'glyphIndex': newGlyph.glyphIndex, 'cells': emptyCells } : newGlyph )
					setGlyphs(newGlyphs)
					}
				}
			/>
			
			<FontIndexPanel 
				glyphs={ glyphs }
				width = { fontDimensions.width }
				height = { fontDimensions.height }
				currentGlyph = { currentGlyph }
				select = { (glyphIndex) => {
					setCurrentGlyph(glyphIndex);
					}
				}
			/>
			
			<PreviewPanel 
				glyphs={ glyphs }
				width = { fontDimensions.width }
				height = { fontDimensions.height }
				changePreviewString={ (txt) => console.log(txt) }
			/>
			<ExportPanel
				glyphs={ glyphs }
				fontName={ fontName }
				fontDimensions={ fontDimensions }
			/>
		</section>
	)
}


window.React = React

const domNode = document.getElementById('react-container');
const root = createRoot(domNode);

root.render(<App/>)
