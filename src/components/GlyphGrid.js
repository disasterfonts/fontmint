import Cell from "./Cell";

export default function GlyphGrid({ glyphName = "A", glyphIndex = 0, editable = 0, width = 5, cellContents = [], select = f => f, toggle = f => f}) {
	
	const gridClasses = "glyph-grid cells-width-" + width;
	
	return (
		<div className={ gridClasses } data-glyphname={ glyphName }>
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
	)
}

