import "./styles.css";
const DarkMode = () => {
	return (
		<div className="checkbox">
			<input id="toggle" type="checkbox" />
			<label htmlFor="toggle" className="switch"></label>
		</div>
	);
};

export default DarkMode;
