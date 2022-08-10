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

	const showAllTransactions = () => {
		setListTransactions(allTransactions);
		setActiveFilter("all");
	};

	const filterTransactions = (typeTransaction) => {
		const transactionsFiltered = allTransactions.filter(
			({ type }) => type === typeTransaction
		);
		setListTransactions(transactionsFiltered);
		setActiveFilter(typeTransaction);
	};

	return (
		<TransactionsContext.Provider
			value={{
				listTransactions,
				setListTransactions,
				allTransactions,
				setAllTransactions,
				activeFilter,
				showAllTransactions,
				filterTransactions,
				removeTransaction,
				addTransaction,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
