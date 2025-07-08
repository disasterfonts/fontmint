export default function ExportPanel({ glyphs, fontName, fontDimensions }) {
	
	const exporter = async (evt) => {
		const exportInfo = {
			fontName,
			fontDimensions,
			glyphs
		}
		const exportInfoString = JSON.stringify(exportInfo);
		console.log(exportInfoString);
		fetch("http://weblite.vag/ufowriter/index.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: exportInfoString,
		}).then(function(responsetext){
			console.log(responsetext.text());
		})
	}
	
	
	return (
		<section className="export-panel">
			<h2>Export</h2>
			<button onClick={ exporter }>maybe</button>
		</section>
	)
}