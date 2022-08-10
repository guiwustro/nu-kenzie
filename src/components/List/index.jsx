import Card from "../Card";
import "./styles.css";
import noCard from "../../assets/imgs/NoCard.png";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactions";
const List = () => {
	const {
		activeFilter,
		showAllTransactions,
		filterTransactions,
		listTransactions,
	} = useContext(TransactionsContext);

	return (
		<section className="container">
			<h3 className="container__title">Resumo financeiro</h3>
			<ul className="container__filters filters">
				<li
					key="filter-all"
					className={`filter__item filter__all ${
						activeFilter === "all" && "filter__item--active"
					}`}
					onClick={() => showAllTransactions()}
				>
					Todos
				</li>
				<li
					key="filter-entries"
					className={`filter__item filter__entries ${
						activeFilter === "incoming" && "filter__item--active"
					}`}
					onClick={() => filterTransactions("incoming")}
				>
					Entradas
				</li>
				<li
					key="filter-expenses"
					className={`filter__item filter__expenses ${
						activeFilter === "expenses" && "filter__item--active"
					}`}
					onClick={() => filterTransactions("expenses")}
				>
					Despesas
				</li>
			</ul>

			<ul className="container__list">
				{listTransactions.map((transaction, index) => (
					<Card transaction={transaction} key={index} index={index} />
				))}
			</ul>

			{listTransactions.length === 0 && (
				<div className="container__list">
					<h2 className="container__title--empty">
						Você ainda não possui nenhum lançamento
					</h2>
					<div className="container__image">
						<img src={noCard} alt="" />
					</div>
				</div>
			)}
		</section>
	);
};
export default List;
