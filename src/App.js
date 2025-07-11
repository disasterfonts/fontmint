import React, { useState, createContext, useContext } from 'react';
import FontSettingsPanel from './components/FontSettingsPanel'
import EditorPanel from './components/EditorPanel'
import FontIndexPanel from './components/FontIndexPanel'
import PreviewPanel from './components/PreviewPanel'
import PreviewPanelCanvas from './components/PreviewPanelCanvas'
import ExportPanel from './components/ExportPanel'

import './less/stylesy.less'

export default function App() {
	
	return (
		<section>
			<h1>mint pixel font editor</h1>
			
			<FontSettingsPanel />
			
			<EditorPanel />
			
			<FontIndexPanel />
			
			<PreviewPanelCanvas />
			
			<ExportPanel />
		</section>
	)
}