import GlyphGrid from './GlyphGrid'
import React, { useRef } from "react";

export default function PreviewPanel ({ glyphs=[], previewString = 'JACKDAWS LOVE MY BIG SPHINX OF QUARTZ', changePreviewString = f => f }) {
	
	const formPreviewString = useRef();
	
	const onChangePreviewString = () => {
		const newString = formPreviewString.current.value
		changePreviewString(newString);
	}
	
	return (
		<section className="preview-panel">
			<h2>Preview</h2>
			<div className="glyph-tiles">
				{ glyphs.map((glyph, i) => (
					<GlyphGrid
						key={i}
						glyphIndex={i}
						editable={0}
						selectable={0}
						glyphName={ glyph.name }
						cellContents={ glyph.cells }
					/>
				))}
			</div>
			<form name="preview-edit">
				<label>Edit:</label>
				<input ref={formPreviewString} type="text" length="255" onChange={ onChangePreviewString } />
			</form>
		</section>
	)
}