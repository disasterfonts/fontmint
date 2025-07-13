import { useGlyphs } from './GlyphsHook'
import WonderCanvas from './WonderCanvas'

export default function PreviewPanelCanvas () {
	
	const { glyphs, currentGlyph, fontDimensions, previewStringCanvas, previewGlyphsCanvas, changePreviewStringCanvas } = useGlyphs()
	
	return (
		<section className="preview-panel-canvas">
			<h2>preview</h2>
			
			<div className="preview-glyphs-canvas">
				{/*<p>A debug: { previewGlyphsCanvas[0].cells.map((cell, i) => cell.status) }</p>*/}
				<WonderCanvas 
					glyphWidth = { parseInt(fontDimensions.width) }
					previewGlyphs = { previewGlyphsCanvas }
				/>
			</div>
			
			<form name="preview-edit">
				<label>Preview text:</label>
				<input
					value={ previewStringCanvas }
					type="text"
					onChange={ event => changePreviewStringCanvas(event.target.value) }
				/>
			</form>
		</section>
	)
}