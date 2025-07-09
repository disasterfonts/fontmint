import React, { useRef, useEffect } from 'react'

const plotSingleGlyph = (ctx, glyphWidth = 5, glyphHeight = 5, scale = 2, glyph = [], index = 0) => {
	const offsetx = (glyphWidth + 1) * scale  * index
	const offsety = (glyphHeight + 1) * scale

	const cellSize = glyphWidth * scale
	console.log(glyph.glyphName, glyphWidth, glyphHeight, scale, cellSize, offsetx);
	
	for (let y=0; y<glyphHeight; y++) {
		for (let x=0; x<glyphWidth; x++) {
			if (glyph.cells[x + (y*glyphWidth)].status) {
				ctx.fillStyle = '#000'
				ctx.fillRect(offsetx + (x*scale), offsety + (y*scale), scale, scale)
			} else {
				ctx.fillStyle = '#fff'
				ctx.fillRect(offsetx + (x*scale), offsety + (y*scale), scale, scale)
			}
			
		}
	}
}

const plotString = (ctx, glyphWidth = 5, scale = 2, glyphs = []) => {
	glyphs.map((glyph, i) => {
		let glyphHeight = glyph.cells.length / glyphWidth;
		plotSingleGlyph(ctx, glyphWidth, glyphHeight, scale, glyph, i);
	})
}

const plotStrings = (ctx, glyphWidth, previewGlyphs) => {
	plotString(ctx, glyphWidth, 2, previewGlyphs)
	plotString(ctx, glyphWidth, 4, previewGlyphs)
	plotString(ctx, glyphWidth, 8, previewGlyphs)
}

export default function WonderCanvas (props) { //{ glyphWidth = 5, previewGlyphs = [], previewString = 'ABCDEF' }) {
	
	const { glyphWidth, previewGlyphs, previewString } = props
	
	const canvasRef = useRef(null)
	
	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		plotStrings(ctx, glyphWidth, previewGlyphs)
	}, [plotStrings])
	
	return (
		<canvas width="800" height="240" ref={ canvasRef }></canvas>
	)
}
