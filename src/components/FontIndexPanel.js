import GlyphTile from './GlyphTile'
import { useGlyphs } from './GlyphsHook'

export default function FontIndexPanel({ width = 5 }) {
	
	const { glyphs, currentGlyph, fontDimensions, selectGlyph } = useGlyphs()
	let visibleGlyphs = glyphs.filter( (glyph) => glyph.visible )
	
	return (
		<section className="font-index">
			<h2>font index</h2>
			<div className="glyph-tiles">
				{ visibleGlyphs.map((glyph, i) => 
						(
						<GlyphTile
							key={i}
							selectedGlyph={ glyph.glyphIndex }
							width={ fontDimensions.width }
							highlighted={ currentGlyph == glyph.glyphIndex ? 1 : 0 }
							editable={0}
							selectable={1}
						/>
						)
					)
				}
			</div>
		</section>
	)
}