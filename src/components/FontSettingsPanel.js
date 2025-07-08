import React, { useState } from "react";


export default function FontSettingsPanel({ fontName="fonto", width=5, height=5, updateFontName = f => f, updateDimensions = f => f }) {
		
	return (
		<section className="font-settings-panel">
			<h2>Font settings</h2>
			<form>
				<label htmlFor="fontname">Name</label>
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
					value={ width }
					onChange={ event => updateDimensions('width', event.target.value) }
				/>
				<label htmlFor="height">height</label>
				<input
					htmlname="height"
					type="number"
					min="4"
					max="10"
					value={ height }
					onChange={ event => updateDimensions('height', event.target.value) }
				/>
			</form>
		</section>
	)
}