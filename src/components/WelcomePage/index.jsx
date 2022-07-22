import Logo from "../../assets/imgs/nu-kenzie-logo-home.png";
import HomeImage from "../../assets/imgs/nukenzie-home-image.svg";
import "./styles.css";

const WelcomePage = ({ setActualPage }) => {
	return (
		<div className="welcome__container">
			<div className="welcome__center-div">
				<img className="img__logo" src={Logo} alt="Logo NuKenzie" />
				<img className="welcome__image" src={HomeImage} alt="Imagem NuKenzie" />
				<h1 className="welcome__title">
					Centralize o controle das suas finanças
				</h1>
				<span className="welcome__subtitle">De forma rápida e segura</span>
				<button
					onClick={() => {
						setActualPage("AppPage");
					}}
					className="welcome__button"
				>
					Iniciar
				</button>
			</div>
		</div>
	);
};
export default WelcomePage;
