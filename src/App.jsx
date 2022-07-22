import "./App.css";

import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import WelcomePage from "./components/WelcomePage";
function App() {
	const [listTransactions, setListTransactions] = useState([]);
	const [allTransactions, setAllTransactions] = useState([]);
	const [activeFilter, setActiveFilter] = useState("all");

	const [actualPage, setActualPage] = useState("WelcomePage");

	return (
		<>
			{actualPage === "WelcomePage" ? (
				<WelcomePage setActualPage={setActualPage} />
			) : (
				<div className="App">
					<Header setActualPage={setActualPage} />
					<Form
						setListTransactions={setListTransactions}
						setAllTransactions={setAllTransactions}
						activeFilter={activeFilter}
					/>
					<TotalMoney listTransactions={listTransactions} />
					<List
						listTransactions={listTransactions}
						setListTransactions={setListTransactions}
						setAllTransactions={setAllTransactions}
						allTransactions={allTransactions}
						activeFilter={activeFilter}
						setActiveFilter={setActiveFilter}
					/>
				</div>
			)}
		</>
	);
}

export default App;
