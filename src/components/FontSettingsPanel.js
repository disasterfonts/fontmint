import React, { useState } from "react";
import { useGlyphs } from './GlyphsHook'

export default function FontSettingsPanel({ }) {
	
	const { fontName, fontDimensions, updateFontName, updateFontDimensions } = useGlyphs()
	
	return (
		<section className="font-settings-panel">
			<h2>font settings</h2>
			<form>
				<label htmlFor="fontname">name</label>
				<input
					htmlname="fontname"
					type="text"
					value={ fontName }
					onChange={ event => updateFontName(event.target.value) }
				/>
				<label htmlFor="width">width</label>
				<input
					htmlname="width"
					type="number"
					min="4"
					max="10"
					value={ fontDimensions.width }
					onChange={ event => updateFontDimensions('width', event.target.value) }
				/>
				<label htmlFor="height">height</label>
				<input
					htmlname="height"
					type="number"
					min="4"
					max="10"
					value={ fontDimensions.height }
					onChange={ event => updateFontDimensions('height', event.target.value) }
				/>
			</form>
		</section>
	)
}