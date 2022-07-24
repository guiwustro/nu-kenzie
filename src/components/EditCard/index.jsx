import "./styles.css";
const EditCard = ({ transaction, setTransaction, setEditCard }) => {
	// transaction = { description, valueEntry, type }
	return (
		<form action="" className="form__edit">
			<textarea
				name="description-edit"
				id="description"
				value={transaction.description}
				onChange={(event) => setTransaction(event.target.value)}
			></textarea>
			<input type="number" name="value-edit" id="" />
			<select className="" name="" id="">
				<option value="incoming">Entrada</option>
				<option value="expenses">Despesa</option>
			</select>
			<button onClick={() => setEditCard(false)} className="button__cancel">
				Cancelar
			</button>
			<button
				onClick={() => setEditCard(false)}
				className="button__edit"
				type="submit"
			>
				Salvar Alterações
			</button>
		</form>
	);
};
export default EditCard;
