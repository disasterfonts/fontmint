import GlyphGrid from './GlyphGrid'

export default function FontIndexPanel({ glyphs = [], select = f => f }) {
	
	return (
		<section className="font-index">
			<h2>Font index</h2>
			<div className="glyph-tiles">
				{ glyphs.map((glyph, i) => (
					<GlyphGrid
						key={i}
						glyphIndex={i}
						editable={0}
						selectable={1}
						select={ select }
						glyphName={ glyph.name }
						cellContents={ glyph.cells }
					/>
				)) }
			</div>
		</section>
	)
}