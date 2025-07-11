import { useGlyphs } from './GlyphsHook'

export default function Cell({ id, glyphName = 'A', glyphIndex = 0, editable = 0, status = 0, style = {}}) {
	
	const { toggleCell, updateDragStatus, updateDragDraw } = useGlyphs()
	
	const classes = "glyph-cell status-" + (status ? 'on' : 'off');
	
	let id_attr = `id-${glyphIndex}-${id}`;
	
	var mouseDown = (evt) => {}
	var mouseUp = (evt) => {}
	var mouseOver = (evt) => {}
	var mouseOut = (evt) => {}
	if (editable) {
		mouseDown = (evt) => {
			evt.preventDefault()
			toggleCell(glyphIndex, id)
			updateDragStatus(1, 1 - status)
		}
		mouseUp = (evt) => {
			evt.preventDefault()
			updateDragStatus(0, 0)
		}
		mouseOver = (evt) => {
			evt.preventDefault()
			updateDragDraw(glyphIndex, id)
		}
		mouseOut = (evt) => {
			evt.preventDefault()
			updateDragDraw(glyphIndex, id)
		}
	}
	
	
	let styles = {...styles}
	
	return (
		<div
			draggable="false"
			id={ id_attr }
			className={ classes }
			style={ styles }
			onMouseDown={ mouseDown }
			onMouseUp={ mouseUp }
			onMouseOver={ mouseOver }
			onMouseOut={ mouseOut }
		>
		</div>
	)
}