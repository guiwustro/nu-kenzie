import DarkMode from "../DarkMode";
import "./styles.css";

const Header = ({ setActualPage }) => {
	return (
		<header className="header">
			<span className="header__logo"></span>
			<DarkMode />
			<button
				className="header__button-start"
				onClick={() => setActualPage("WelcomePage")}
			>
				Início
			</button>
		</header>
	);
};

export default Header;
