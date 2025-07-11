import { useGlyphs } from './GlyphsHook'
import Cell from "./Cell";

export default function GlyphGrid({ glyphName = "A", glyphIndex = 0, editable = 0, width = 5, cellContents = [] }) {
	
	const { updateDragStatus } = useGlyphs()
	
	const gridClasses = "glyph-grid cells-width-" + width;
	
	const mouseLeave = (evt) => {
		updateDragStatus(0, 0)
	}
	
	return (
		<div className={ gridClasses } draggable="false" onMouseLeave={ mouseLeave }>
			{ cellContents.map((cell, i) => (
				<Cell
					id={i}
					glyphName={glyphName}
					glyphIndex={glyphIndex}
					key={i}
					editable={editable}
					status={ cell.status }
				/> 
			)) }
		</div>
	)
}

