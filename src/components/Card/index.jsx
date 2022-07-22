import "./styles.css";
const Card = ({
	transaction,
	index,
	setListTransactions,
	setAllTransactions,
}) => {
	const removeTransaction = () => {
		setListTransactions((old) => old.filter((_, i) => i !== index));
		setAllTransactions((old) => old.filter((_, i) => i !== index));
	};
	const value = (+transaction.valueEntry).toFixed(2);

	return transaction.type === "incoming" ? (
		<li className="list__item list__item--green-border">
			<h3 className="item__description">{transaction.description}</h3>
			<span className="item__type">Entradas</span>
			<span className="item__value item__value--green">R$ {value}</span>
			<button
				onClick={() => {
					removeTransaction();
				}}
				className="item__button"
			></button>
		</li>
	) : (
		<li className="list__item list__item--red-border">
			<h3 className="item__description">{transaction.description}</h3>
			<span className="item__type">Despesas</span>
			<span className="item__value item__value--red">R$ {value}</span>
			<button
				onClick={() => {
					removeTransaction();
				}}
				className="item__button"
			></button>
		</li>
	);
};

export default Card;
