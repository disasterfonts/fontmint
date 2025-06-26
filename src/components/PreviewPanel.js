import GlyphGrid from './GlyphGrid'
import React, { useState } from "react";

export default function PreviewPanel ({ glyphs=[], width = 5, placeholderString = 'JACKDAWS LOVE MY BIG SPHINX OF QUARTZ 0123456789', changePreviewString = f => f }) {
	
	const [previewString, setPreviewString] = useState(placeholderString);
	const [previewGlyphs, setPreviewGlyphs] = useState(glyphs);
	
	const find = (glyphs = [], glyphName = "A") => {
		// locate glyph in array by child object property glyphName
		for (const glyph of glyphs) {
			const result = glyph.glyphName === glyphName ? glyph : find(glyph.children, glyphName);
			if(result) return result;
		}
	}
	
	const previewStringMesser = (inputTextValue) => {
		let newPreviewString = inputTextValue.toUpperCase()
		
		setPreviewString(newPreviewString)
		let newPreviewGlyphs = []
		if (newPreviewString.length > 0) {
			for (let n=0; n<newPreviewString.length; n++) {
				if (newPreviewString[n] != " ") {
					newPreviewGlyphs[n] = find(glyphs, newPreviewString[n]);
				} else {
					newPreviewGlyphs[n] = find(glyphs, 'space');
				}
			}
		}
		setPreviewGlyphs(newPreviewGlyphs)
	}
	
	
	return (
		<section className="preview-panel">
			<h2>Preview</h2>
			<div className="preview-glyphs preview-1x">
				{ previewGlyphs.map((glyph, i) => (
					<GlyphGrid
						key={i}
						glyphIndex={glyph.glyphIndex}
						width={ width }
						editable={0}
						selectable={0}
						glyphName={ glyph.glyphName }
						cellContents={ glyph.cells }
					/>
				))}
			</div>
			<div className="preview-glyphs preview-2x">
				{ previewGlyphs.map((glyph, i) => (
					<GlyphGrid
						key={i}
						glyphIndex={glyph.glyphIndex}
						width={ width }
						editable={0}
						selectable={0}
						glyphName={ glyph.glyphName }
						cellContents={ glyph.cells }
					/>
				))}
			</div>
			<div className="preview-glyphs preview-4x">
				{ previewGlyphs.map((glyph, i) => (
					<GlyphGrid
						key={i}
						glyphIndex={glyph.glyphIndex}
						width={ width }
						editable={0}
						selectable={0}
						glyphName={ glyph.glyphName }
						cellContents={ glyph.cells }
					/>
				))}
			</div>
			<form name="preview-edit">
				<label>Edit:</label>
				<input
					value={ previewString }
					type="text"
					onChange={ event => previewStringMesser(event.target.value) }
				/>
			</form>
		</section>
	)
}