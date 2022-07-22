import "./styles.css";
import { useState, useEffect } from "react";

const TotalMoney = ({ listTransactions }) => {
	const [totalValue, setTotalValue] = useState("0");

	useEffect(() => {
		const value = listTransactions.reduce(
			(acc, prev) =>
				prev.type === "incoming"
					? acc + +prev.valueEntry
					: acc - +prev.valueEntry,
			0
		);
		setTotalValue(
			new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(value)
		);
	}, [listTransactions]);

	return (
		<div className="container__total">
			<h3 className="subtitle__total">Valor total:</h3>
			<span className="description__total">O valor se refere ao saldo</span>
			<span className="value__total">{totalValue}</span>
		</div>
	);
};

export default TotalMoney;
