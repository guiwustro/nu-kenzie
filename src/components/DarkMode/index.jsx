import "./styles.css";
import { useEffect, useState } from "react";
const DarkMode = () => {
	const lightTheme = {
		"--color-total-container": "#ffffff",
		"--color-grey-empty-title": "#868e96",
		"--color-bgc-welcome-page": "#212529",
		"--color-app": "#f8f9fa",
		"--color-grey-5": "#343a40",
		"--color-grey-4": "#212529",
		"--color-grey-3": "#868e96",
		"--color-grey-2": "#e9ecef",
		"--color-grey-1": "#f8f9fa",
		"--color-white:": "#ffffff",
		"--color-black:": "#000000",
		"--color-red-1": "#ff000099",
	};

	const darkTheme = {
		"--color-total-container": "#3f424a",
		"--color-grey-empty-title": "#f8f9fa",
		"--color-bgc-welcome-page": "#212529",
		"--color-app": "#3f424a",
		"--color-grey-5": "#f8f9fa",
		"--color-grey-4": "#f8f9fa",
		"--color-grey-3": "#868e96",
		"--color-grey-2": "#a9b4c0",
		"--color-grey-1": "#6c737a",
		"--color-white:": "#ffffff",
		"--color-black:": "#000000",
		"--color-red-1": "#f08a8a",
	};

	const [isDark, setIsDark] = useState(
		localStorage.getItem("@nu-kenzie:dark-theme")
	);

	const setTheme = (theme) => {
		for (let keys in theme) {
			document.documentElement.style.setProperty(keys, theme[keys]);
		}
	};
	useEffect(() => {
		if (localStorage.getItem("@nu-kenzie:dark-theme") === null)
			setIsDark(false);
	}, [isDark]);

	isDark ? setTheme(darkTheme) : setTheme(lightTheme);

	return (
		<div className="checkbox">
			<input
				id="toggle"
				type="checkbox"
				onClick={() => {
					setIsDark((theme) => !theme);
					localStorage.setItem("@nu-kenzie:dark-theme", isDark);
				}}
			/>
			<label htmlFor="toggle" className="switch"></label>
		</div>
	);
};

export default DarkMode;
