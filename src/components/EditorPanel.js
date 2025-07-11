import GlyphGrid from './GlyphGrid'
import { useGlyphs } from './GlyphsHook'

export default function EditorPanel() {
	
	const { glyphs, currentGlyph, fontDimensions, clearCells, randomCells } = useGlyphs()
	
	const glyph = glyphs[currentGlyph]
	
	const clearCellsClick = (evt) => {
		clearCells(glyph.glyphIndex)
	}
	const randomCellsClick = (evt) => {
		randomCells(glyph.glyphIndex)
	}
	
	return (
		<section className="editor-panel">
			<h2>editing: '{ glyph.glyphName }'</h2>
			<GlyphGrid
				width={ fontDimensions.width }
				height={ fontDimensions.height }
				editable={1}
				selectable={0}
				glyphName={glyph.glyphName}
				glyphIndex={glyph.glyphIndex}
				cellContents={glyph.cells}
			/>
			<button	onClick={ clearCellsClick }>Clear</button>
			<button	onClick={ randomCellsClick }>Random</button>
		</section>
	)
}