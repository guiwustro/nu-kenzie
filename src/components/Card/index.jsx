import "./styles.css";
// import EditCard from "../EditCard";

const Card = ({
	transaction,
	index,
	setListTransactions,
	setAllTransactions,
}) => {
	// const [setEditCard, editCard] = useState(false);

	const removeTransaction = () => {
		setListTransactions((old) => old.filter((_, i) => i !== index));
		setAllTransactions((old) => old.filter((_, i) => i !== index));
	};
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
					removeTransaction();
				}}
				className="item__button--delete"
			></button>
			{/* <button
				className="item__button--edit"
				onClick={() => {
					setEditCard(true);
				}}
			>
				Editar
			</button> */}
			{/* {editCard ? EditCard({transaction ={transaction} setTransaction={setTransaction} setEditCard}) : null} */}
		</li>
	);
};

export default Card;
