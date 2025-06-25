import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import GlyphGrid from './components/GlyphGrid'
import EditorPanel from './components/EditorPanel'
import FontIndexPanel from './components/FontIndexPanel'
import PreviewPanel from './components/PreviewPanel'
import './less/stylesy.less'
import cellInitData from "./default_cells.json"
import defaultGlyphs from "./default_glyphs.js"

let defaultGlyphData = defaultGlyphs(5,5); // width/height

export default function App() {

	const [glyphs, setGlyphs] = useState(defaultGlyphData);
	const [currentGlyph, setCurrentGlyph] = useState(0);
	const [previewString, setPreviewSting] = useState('JACKDAWS LOVE MY BIG SPHINX OF QUARTZ');
	
	return (
		<section>
			<h1>mint pixel font editor</h1>
			<EditorPanel 
				glyph={ glyphs[currentGlyph] }
				glyphIndex = { currentGlyph }
				toggle = { (glyphIndex, id) => {
					
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
			/>
			<FontIndexPanel 
				glyphs={ glyphs }
				select = { (glyphIndex) => {
					setCurrentGlyph(glyphIndex);
					}
				}
			/>
			<PreviewPanel 
				glyphs={ glyphs }
				previewString={ previewString }
				changePreviewString={ (txt) => console.log(txt) }
			/>
		</section>
	)
}


/*			<GlyphGrid
				width={5}
				height={5}
				editable={1}
				toggle={ id => {
					const newCells = cells.map((cell, i) => {
						if (cell.id == id) {
							cell.status = 1 - cell.status; // invert cell
						}
						return cell;
					});
					setCells(newCells);
					}
				}
				cellContents={cells}
			/>;*/



window.React = React

const domNode = document.getElementById('react-container');
const root = createRoot(domNode);

root.render(<App/>)
