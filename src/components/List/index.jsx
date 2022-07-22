import Card from "../Card";
import "./styles.css";
import { useState } from "react";
import noCard from "../../assets/imgs/NoCard.png";
const List = ({
	listTransactions,
	setListTransactions,
	allTransactions,
	setAllTransactions,
}) => {
	// a variável listTransactions está renderizando todo nossa página, precisa criar uma constante que armazene TODAS as transações. E sempre que for adicionado alguma, ou deletado, essa variável tem que identificar...
	const [activeFilter, setActiveFilter] = useState("all");
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
		<section className="container">
			<h3 className="container__title">Resumo financeiro</h3>
			<ul className="container__filters filters">
				<li
					key="filter-all"
					className={`filter__item filter__all ${
						activeFilter === "all" ? "filter__item--active" : ""
					}`}
					onClick={() => filterAll()}
				>
					Todos
				</li>
				<li
					key="filter-entries"
					className={`filter__item filter__entries ${
						activeFilter === "incoming" ? "filter__item--active" : ""
					}`}
					onClick={() => filterIncoming()}
				>
					Entradas
				</li>
				<li
					key="filter-expenses"
					className={`filter__item filter__expenses ${
						activeFilter === "expenses" ? "filter__item--active" : ""
					}`}
					onClick={() => filterExpenses()}
				>
					Despesas
				</li>
			</ul>
			<ul className="container__list">
				{listTransactions.map((transaction, index) => (
					<Card
						setListTransactions={setListTransactions}
						setAllTransactions={setAllTransactions}
						transaction={transaction}
						index={index}
					/>
				))}
			</ul>

			{listTransactions.length === 0 ? (
				<div className="container__list">
					<h2 className="container__title--empty">
						Você ainda não possui nenhum lançamento
					</h2>
					<div className="container__image">
						<img src={noCard} alt="" />
					</div>
				</div>
			) : null}
		</section>
	);
};
export default List;
