import "./styles.css";
import { useState, useEffect } from "react";

const TotalMoney = ({ listTransactions }) => {
	const value = listTransactions.reduce(
		(acc, prev) =>
			prev.type === "incoming"
				? acc + +prev.valueEntry
				: acc - +prev.valueEntry,
		0
	);
	const formatedValue = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(value);

	return (
		<div className="container__total">
			<h3 className="subtitle__total">Valor total:</h3>
			<span className="description__total">O valor se refere ao saldo</span>
			<span className="value__total">{formatedValue}</span>
		</div>
	);
};

export default TotalMoney;
