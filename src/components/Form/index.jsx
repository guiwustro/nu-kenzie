import "./styles.css";
import { useState } from "react";

const Form = ({ setListTransactions, setAllTransactions }) => {
	const [description, setDescription] = useState("");
	const [valueEntry, setValueEntry] = useState("");
	const [type, setType] = useState("incoming");
	const addTransaction = () => {
		const transation = { description, valueEntry, type };
		if (!valueEntry) transation.valueEntry = 0;
		setListTransactions((oldList) => [...oldList, transation]);
		setAllTransactions((oldList) => [...oldList, transation]);
	};
	return (
		<aside className="aside__form">
			<form
				className="form"
				onSubmit={(event) => {
					event.preventDefault();
					addTransaction();
				}}
			>
				<div className="description__container">
					<label
						className="form__label description__label"
						htmlFor="description"
					>
						Descrição
					</label>
					<input
						type="text"
						className="form__input description__input"
						placeholder="Digite aqui sua descrição"
						id="description"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					<span className="description__span">Ex: Compra de roupas</span>
				</div>

				<div className="container__entries">
					<label htmlFor="value" className="form__label label__value">
						Valor
					</label>
					<input
						type="number"
						className="form__input input__value"
						placeholder="1"
						id="value"
						value={valueEntry}
						onChange={(event) => setValueEntry(event.target.value)}
					/>

					<label htmlFor="type" className="form__label label__type">
						Tipo de valor
					</label>
					<select
						name="type"
						id="type"
						className="select__type form__input"
						value={type}
						onChange={(event) => {
							setType(event.target.value);
						}}
					>
						<option value="incoming">Entrada</option>
						<option value="expense">Despesa</option>
					</select>
				</div>

				<button className="form__button" type="submit">
					Inserir valor
				</button>
			</form>
		</aside>
	);
};

export default Form;
