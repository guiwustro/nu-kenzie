import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactions";
import "./styles.css";

const Card = ({ transaction, index }) => {
	const { removeTransaction } = useContext(TransactionsContext);

	const value = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(+transaction.valueEntry);

	return (
		<li
			className={`list__item ${
				transaction.type === "incoming"
					? "list__item--green-border"
					: "list__item--red-border"
			}`}
		>
			<h3 className="item__description">{transaction.description}</h3>
			<span className="item__type">
				{transaction.type === "incoming" ? "Entrada" : "Despesa"}
			</span>
			<span
				className={`item__value ${
					transaction.type === "incoming"
						? "item__value--green"
						: "item__value--red"
				}`}
			>
				{value}
			</span>
			<button
				onClick={() => {
					removeTransaction(index);
				}}
				className="item__button--delete"
			></button>
		</li>
	);
};

export default Card;
