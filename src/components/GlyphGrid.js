import Cell from "./Cell";

export default function GlyphGrid({ glyphName = "A", glyphIndex = 0, width = 5, height = 5, editable = 0, selectable = 0, cellContents = [], select = f => f, toggle = f => f}) {
	
	let onClickSelect = selectable ? (() => { select(glyphIndex) }) : function() {}
	
	return (
		<div className="glyph-tile" onClick={ selectable ? onClickSelect : function() {} }>
			<div className="glyph-grid" data-glyphname={ glyphName } data-selectable={ selectable }>
				{ cellContents.map((cell, i) => (
					<Cell
						id={i}
						glyphName={glyphName}
						glyphIndex={glyphIndex}
						key={i}
						editable={editable}
						toggle={ toggle }
						status={ cell.status } />
				)) }
			</div>
			{ selectable ? <h3 className="glyph-name"> { glyphName } </h3> : '' }
		</div>
	)
}

