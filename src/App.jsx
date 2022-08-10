import "./App.css";

import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import WelcomePage from "./components/WelcomePage";
function App() {
	const [actualPage, setActualPage] = useState("WelcomePage");

	return (
		<>
			{actualPage === "WelcomePage" ? (
				<WelcomePage setActualPage={setActualPage} />
			) : (
				<div className="App">
					<Header setActualPage={setActualPage} />
					<Form />
					<TotalMoney />
					<List />
				</div>
			)}
		</>
	);
}

export default App;
