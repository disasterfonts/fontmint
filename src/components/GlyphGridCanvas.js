export default function GlyphGridCanvas({ glyphName = "A", glyphIndex = 0, editable = 0, width = 5, height = 5, cellContents = [], dragstatus = f => f, dragdraw = f => f, select = f => f, toggle = f => f}) {
	
	const gridClasses = `glyph-grid-canvas cells-width-${width}`;
	const gridId = `glyph-name-${glyphName}`; // need better way of unique id, maybe random?
	const canvas = document.getElementById(gridId);
	const ctx = canvas.getContext('2d');
	
	return (
		<canvas id={ gridId } style={ canvasStyle } canvas-className={ gridClasses }>
			{
				cellContents.map((cell, i) => {
					cell ? ctx.fillStyle = '#000' : ctx.fillStyle = '#fff'
					let x = (i % width);
					let y = Math.floor(i / height);
					ctx.fillRect(x,y,1,1);
				})
			}
		</canvas>
	)
}

