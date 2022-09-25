import DarkMode from "../DarkMode";
import "./styles.css";

const Header = ({ setIsHomePage }) => {
	return (
		<header className="header">
			<span className="header__logo"></span>
			<DarkMode />
			<button
				className="header__button-start"
				onClick={() => setIsHomePage(true)}
			>
				Início
			</button>
		</header>
	);
};

export default Header;
