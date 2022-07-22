import "./styles.css";
import { useState, useEffect } from "react";

const TotalMoney = ({ listTransactions }) => {
	const [totalValue, setTotalValue] = useState("0");

	useEffect(() => {
		setTotalValue(
			listTransactions
				.reduce(
					(acc, prev) =>
						prev.type === "incoming"
							? acc + +prev.valueEntry
							: acc - +prev.valueEntry,
					0
				)
				.toFixed(2)
		);
	}, [listTransactions]);

	return (
		<div className="container__total">
			<h3 className="subtitle__total">Valor total:</h3>
			<span className="description__total">O valor se refere ao saldo</span>
			<span className="value__total">R$ {totalValue}</span>
		</div>
	);
};

export default TotalMoney;
