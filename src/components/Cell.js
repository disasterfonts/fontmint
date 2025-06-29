export default function Cell({ id, glyphName = 'A', glyphIndex = 0, editable = 0, dragstatus = f => f, dragdraw = f => f, toggle = f => f, status = 0, style = {}}) {
	
	const classes = "glyph-cell status-" + (status ? 'on' : 'off');
	
	let id_attr = `id-${glyphIndex}-${id}`;
	
	// var onClickToggle = (evt) => {}
	var mouseDown = (evt) => {}
	var mouseUp = (evt) => {}
	var mouseOver = (evt) => {}
	var mouseOut = (evt) => {}
	if (editable) {
		// onClickToggle = () => {
		// 	toggle(glyphIndex, id)
		// }
		mouseDown = (evt) => {
			evt.preventDefault()
			toggle(glyphIndex, id)
			dragstatus(1, 1 - status)
		}
		mouseUp = (evt) => {
			evt.preventDefault()
			dragstatus(0, 0)
		}
		mouseOver = (evt) => {
			evt.preventDefault()
			dragdraw(glyphIndex, id)
		}
		mouseOut = (evt) => {
			evt.preventDefault()
			dragdraw(glyphIndex, id)
		}
	}
	
	
	//let styles = editable ? {cursor: 'pointer', ...style} : { ...style}
	let styles = {...styles}
	
	return (
		<div
			draggable="false"
			id={ id_attr }
			className={ classes }
			style={ styles }
			// onClick={ onClickToggle }
			onMouseDown={ mouseDown }
			onMouseUp={ mouseUp }
			onMouseOver={ mouseOver }
			onMouseOut={ mouseOut }
		>
		{/*<img src='assets/empty5x5.png' />*/}
		</div>
	)
}