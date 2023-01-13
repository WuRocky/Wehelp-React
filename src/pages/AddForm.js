import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../lib/init-firebase";

function AddForm({ todoList, setTodoList }) {
	let [input, setInput] = useState("");

	const buttonHandler = (e) => {
		e.preventDefault();
		if (input === "") {
			alert("請輸入文字");
			return;
		}
		let uid = uuidv4();

		db.collection("todo-list")
			.add({
				text: input,
				id: uid,
			})
			.then(function (docRef) {
				setTodoList([...todoList, { input, id: uid }]);
			})
			.catch(function (error) {
				console.error("Error adding document: ", error);
			});

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
