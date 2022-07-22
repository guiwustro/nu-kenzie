import "./styles.css";
import { useState } from "react";
const DarkMode = () => {
	const darkTheme ={

	}
	const lightTheme ={

	}
	const [isDark, setIsDark] = useState(false)
	localStorage.setItem('@nu-kenzie:theme',isDark)
	const setTheme = () => {}
	isDark ? setTheme(darkTheme) : setTheme(lightTheme)
	document.documentElement.style.setProperty('--nome-da-variavel', '#cor')
	return (
		<div className="checkbox">
			<input id="toggle" type="checkbox" onChange={({target})=> setIsDark((theme)=>!theme)} />
			<label htmlFor="toggle" className="switch"></label>
		</div>
	);
};

export default DarkMode;
