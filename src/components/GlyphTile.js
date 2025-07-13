// wrapper for glyph grid with actions

import GlyphGrid from "./GlyphGrid"
import { useGlyphs } from './GlyphsHook'

export default function GlyphTile({ selectedGlyph = 0, width=5, selectable = 0, editable = 0, highlighted = 0 }) {
	
	const { glyphs, selectGlyph } = useGlyphs()
	
	const glyph = glyphs[selectedGlyph]
	
	glyph.glyphName == 'space' ? selectable = 0 : selectable = selectable
	
	
	let onClickSelect = selectable ? (() => { selectGlyph(glyph.glyphIndex) }) : function() {}
	
	let classNames = "glyph-tile" + (highlighted ? ' highlighted' : '')
	
	return (
		<div className={ classNames } onClick={ selectable ? onClickSelect : function() {} }>
			<GlyphGrid
				glyphName={ glyph.glyphName }
				glyphIndex={ glyph.glyphIndex }
				editable={0}
				width={ width }
				select={ selectGlyph }
				cellContents={ glyph.cells }
			/>
			{ selectable ? <h3 className="glyph-name"> { glyph.glyphNiceName } </h3> : '' }
		</div>
	)
}

