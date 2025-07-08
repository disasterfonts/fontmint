import GlyphGrid from './GlyphGrid'

export default function EditorPanel({ glyph = {'name': 'A', 'cells': []}, width=5, height=5, dragstatus = f => f, dragdraw = f => f, toggle = f => f, clearCells = f => f }) {
	
	const clearCellsClick = (evt) => {
		clearCells(glyph.glyphIndex)
	}
	
	return (
		<section className="editor-panel">
			<h2>Editing: '{ glyph.glyphName }'</h2>
			<GlyphGrid
				width={ width }
				height={ height }
				editable={1}
				selectable={0}
				toggle={ toggle }
				glyphName={glyph.glyphName}
				glyphIndex={glyph.glyphIndex}
				cellContents={glyph.cells}
				dragstatus={ dragstatus }
				dragdraw={ dragdraw }
			/>
			<button	onClick={ clearCellsClick }>Clear</button>
		</section>
	)
}