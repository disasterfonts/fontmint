import React from "react";
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlyphsProvider from './components/GlyphsHook'

window.React = React

const domNode = document.getElementById('react-container');
const root = createRoot(domNode);

root.render(
	<GlyphsProvider>
		<App/>
	</GlyphsProvider>
)
