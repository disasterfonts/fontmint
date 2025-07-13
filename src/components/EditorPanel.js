import GlyphGrid from './GlyphGrid'
import { useGlyphs } from './GlyphsHook'

export default function EditorPanel() {
	
	const { glyphs, currentGlyph, fontDimensions, clearCells, randomCells } = useGlyphs()
	
	const glyph = glyphs[currentGlyph]
	
	return (
		<section className="editor-panel">
			<h2>editing: <em>{ glyph.glyphName }</em></h2>
			<GlyphGrid
				width={ fontDimensions.width }
				height={ fontDimensions.height }
				editable={1}
				selectable={0}
				glyphName={glyph.glyphName}
				glyphIndex={glyph.glyphIndex}
				cellContents={glyph.cells}
			/>
			<div className="operations">
				<button	onClick={ (evt) => clearCells(glyph.glyphIndex) }>Clear</button>
				<button	onClick={ (evt) => randomCells(glyph.glyphIndex) }>Random</button>
			</div>
		</section>
	)
}