import Cell from "./Cell";

export default function GlyphGrid({ glyphName = "A", glyphIndex = 0, editable = 0, width = 5, cellContents = [], dragstatus = f => f, dragdraw = f => f, select = f => f, toggle = f => f}) {
	
	const gridClasses = "glyph-grid cells-width-" + width;
	
	const mouseLeave = (evt) => {
		dragstatus(0, 0)
	}
	
	return (
		<div className={ gridClasses } data-glyphname={ glyphName } draggable="false" onMouseLeave={ mouseLeave }>
			{ cellContents.map((cell, i) => (
				<Cell
					id={i}
					glyphName={glyphName}
					glyphIndex={glyphIndex}
					key={i}
					editable={editable}
					toggle={ toggle }
					status={ cell.status }
					dragstatus={ dragstatus }
					dragdraw={ dragdraw }
				/> 
			)) }
		</div>
	)
}

