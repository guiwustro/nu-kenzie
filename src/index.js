import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./root.css";
import App from "./App";
import TransactionsProvider from "./contexts/transactions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TransactionsProvider>
			<App />
		</TransactionsProvider>
	</React.StrictMode>
);
