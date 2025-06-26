import React, { useState } from "react";

export default function FontSettingsPanel({ width=5, height=5, updateDimensions = f => f }) {
	
	
	
	
	return (
		<section className="font-settings-panel">
			<h2>Font settings</h2>
			<form>
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