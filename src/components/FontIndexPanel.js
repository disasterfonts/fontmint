import GlyphTile from './GlyphTile'

export default function FontIndexPanel({ glyphs = [], currentGlyph = 0, width = 5, select = f => f }) {
	
	let visibleGlyphs = glyphs.filter( (glyph) => glyph.visible )
	
	return (
		<section className="font-index">
			<h2>Font index</h2>
			<div className="glyph-tiles">
				{ visibleGlyphs.map((glyph, i) => 
						(
						<GlyphTile
							key={i}
							width={ width }
							highlighted={ currentGlyph == glyph.glyphIndex ? 1 : 0 }
							editable={0}
							selectable={1}
							select={ select }
							glyph={ glyph }
						/>
						)
					)
				}
			</div>
		</section>
	)
}