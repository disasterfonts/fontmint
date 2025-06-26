// wrapper for glyph grid with actions

import GlyphGrid from "./GlyphGrid";

export default function GlyphTile({ glyph = {}, width=5, selectable = 0, editable = 0, highlighted = 0, select = f => f, toggle = f => f}) {
	
	glyph.glyphName == 'space' ? selectable = 0 : selectable = selectable
	
	let onClickSelect = selectable ? (() => { select(glyph.glyphIndex) }) : function() {}
	
	let classNames = "glyph-tile" + (highlighted ? ' highlighted' : '')
	
	return (
		<div className={ classNames } onClick={ selectable ? onClickSelect : function() {} }>
			<GlyphGrid
				glyphName={ glyph.glyphName }
				glyphIndex={ glyph.glyphIndex }
				editable={0}
				width={ width }
				select={ select }
				toggle={ toggle }
				cellContents={ glyph.cells }
			/>
			{ selectable ? <h3 className="glyph-name"> { glyph.glyphName } </h3> : '' }
		</div>
	)
}

