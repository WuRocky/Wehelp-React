import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddForm({ todoList, setTodoList }) {
	let [input, setInput] = useState("");

	const buttonHandler = (e) => {
		e.preventDefault();
		setTodoList([...todoList, { input, id: uuidv4() }]);
		setInput("");
	};

	const inputHandler = (e) => {
		setInput(e.target.value);
	};
	return (
		<form>
			<input onChange={inputHandler} value={input} type="text" />
			<button onClick={buttonHandler}>新增紀錄</button>
		</form>
	);
}

export default AddForm;
