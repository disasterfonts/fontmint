import WonderCanvas from './WonderCanvas'


export default function PreviewPanelCanvas ({ width = 5, previewGlyphsCanvas = [], previewStringCanvas = 'ABCDEF', changePreviewStringCanvas = f => f }) {
	
	
	
	return (
		<section className="preview-panel-canvas">
			<h2>Preview (canvas)</h2>
			<p className="testoprev">{ previewStringCanvas }</p>
			
			<div className="preview-glyphs-canvas">
				<WonderCanvas 
					glyphWidth = { width }
					previewGlyphs = { previewGlyphsCanvas }
				/>
			</div>
			
			<form name="preview-edit">
				<label>Edit:</label>
				<input
					value={ previewStringCanvas }
					type="text"
					onChange={ event => changePreviewStringCanvas(event.target.value) }
				/>
			</form>
		</section>
	)
}