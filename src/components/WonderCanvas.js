import React, { useRef, useEffect } from 'react'

export default function WonderCanvas ({ glyphWidth = 5, previewGlyphs = [] }) {
	
	const plotSingleGlyph = (ctx, glyphWidth = 5, glyphHeight = 5, scale = 2, glyph = [], index = 0) => {
		const offset_x = (glyphWidth + 1) * scale * index
		const offset_y = (glyphHeight + 1) * scale

		for (let y=0; y<glyphHeight; y++) {
			for (let x=0; x<glyphWidth; x++) {
				if (glyph.cells[x + (y*glyphWidth)].status) {
					ctx.fillStyle = '#000'
					ctx.fillRect(offset_x + (x*scale), offset_y + (y*scale), scale, scale)
				} else {
					ctx.fillStyle = '#fff'
					ctx.fillRect(offset_x + (x*scale), offset_y + (y*scale), scale, scale)
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
		ctx.fillStyle = '#fff'
		ctx.fillRect(0,0,800,200)
		plotString(ctx, glyphWidth, 2, previewGlyphs)
		plotString(ctx, glyphWidth, 4, previewGlyphs)
		plotString(ctx, glyphWidth, 8, previewGlyphs)
		plotString(ctx, glyphWidth, 16, previewGlyphs)
	}
	const canvasRef = useRef(null)
	
	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		plotStrings(ctx, glyphWidth, previewGlyphs)
	}, [plotStrings])
	
	return (
		<canvas width="800" height="200" ref={ canvasRef }></canvas>
	)
}
