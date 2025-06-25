import GlyphGrid from './GlyphGrid'

export default function EditorPanel({ glyph = {'name': 'A', 'cells': []}, toggle = f => f }) {

	return (
		<section className="editor-panel">
			<h2>Editing: '{ glyph.name }'</h2>
			<GlyphGrid
				width={5}
				height={5}
				editable={1}
				selectable={0}
				toggle={ toggle }
				glyphIndex={glyph.glyphIndex}
				cellContents={glyph.cells}
			/>
		</section>
	)
}