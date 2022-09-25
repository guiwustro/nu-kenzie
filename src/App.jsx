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

	const [isHomePage, setIsHomePage] = useState(false);

	return (
		<>
			{isHomePage === true ? (
				<WelcomePage setIsHomePage={setIsHomePage} />
			) : (
				<div className="App">
					<Header setIsHomePage={setIsHomePage} />
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
