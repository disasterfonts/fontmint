export default function Cell({ id, glyphName = 'A', glyphIndex = 0, editable = 0, dragstatus = f => f, dragdraw = f => f, toggle = f => f, status = 0, style = {}}) {
	
	const classes = "glyph-cell status-" + (status ? 'on' : 'off');
	
	let id_attr = `id-${glyphIndex}-${id}`;
	let onClickToggle = editable ? (() => { toggle(glyphIndex, id) }) : function() {}
	let mouseDown = editable ? ((evt) => dragstatus(1, 1 - status)) : function() {}
	let mouseUp = editable ? ((evt) => dragstatus(0, 0)) : function() {}
	let mouseOver = editable ? ((evt) => dragdraw(glyphIndex, id)) : function() {}
	let mouseOut = editable ?  ((evt) => dragdraw(glyphIndex, id)) : function() {}
	//let styles = editable ? {cursor: 'pointer', ...style} : { ...style}
	let styles = {...styles}
	
	return (
		<div
			draggable="false"
			id={ id_attr }
			className={ classes }
			style={ styles }
			onClick={ onClickToggle }
			onMouseDown={ (evt) => dragstatus(1, 1 - status) }
			onMouseUp={ (evt) => dragstatus(0, 0) }
			onMouseOver={ (evt) => dragdraw(glyphIndex,id) }
			onMouseOut={ (evt) => dragdraw(glyphIndex,id) }
		>
		{/*<img src='assets/empty5x5.png' />*/}
		</div>
	)
}