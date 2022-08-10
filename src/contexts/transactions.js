import { createContext, useState } from "react";

export const TransactionsContext = createContext({});

const TransactionsProvider = ({ children }) => {
	const [allTransactions, setAllTransactions] = useState([]);
	const [listTransactions, setListTransactions] = useState([]);
	const [activeFilter, setActiveFilter] = useState("all");

	const addTransaction = (description, valueEntry, type) => {
		const transaction = {
			description: description,
			valueEntry: valueEntry,
			type: type,
		};

		if (!valueEntry) transaction.valueEntry = 0;

		setAllTransactions((oldList) => [transaction, ...oldList]);
		return activeFilter === "all" || transaction.type === activeFilter
			? setListTransactions((oldList) => [transaction, ...oldList])
			: null;
	};

	const removeTransaction = (index) => {
		setListTransactions((old) => old.filter((_, i) => i !== index));
		setAllTransactions((old) => old.filter((_, i) => i !== index));
	};

	const filterAll = () => {
		setListTransactions(allTransactions);
		setActiveFilter("all");
	};
	const filterIncoming = () => {
		const incoming = allTransactions.filter(({ type }) => type === "incoming");
		setListTransactions(incoming);
		setActiveFilter("incoming");
	};
	const filterExpenses = () => {
		const expenses = allTransactions.filter(({ type }) => type !== "incoming");
		setListTransactions(expenses);
		setActiveFilter("expenses");
	};

	return (
		<TransactionsContext.Provider
			value={{
				listTransactions,
				setListTransactions,
				allTransactions,
				setAllTransactions,
				activeFilter,
				filterAll,
				filterIncoming,
				filterExpenses,
				removeTransaction,
				addTransaction,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
