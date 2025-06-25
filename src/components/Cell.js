export default function Cell({ id, glyphName = 'A', glyphIndex = 0, editable = 0, toggle = f => f, status = 0, style = {}}) {
	
	const classes = "glyph-cell status-" + (status ? 'on' : 'off');
	
	let id_attr = "id-" + id;
	let onClickToggle = editable ? (() => { toggle(glyphIndex, id) }) : function() {}
	let styles = editable ? {cursor: 'pointer', ...style} : { ...style}
	
	return (
		<div
			id={ id_attr }
			className={ classes }
			data-status={ status }
			data-id={ id }
			data-index={ glyphIndex }
			style={ styles }
			onClick={ onClickToggle } />
	)
}