import React from "react";
import db from "../lib/init-firebase";
function Info({ list, todoList, setTodoList }) {
	const deleteHandler = () => {
		setTodoList(todoList.filter((e) => e.id !== list.id));
		db.collection("todo-list")
			.where("id", "==", list.id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.ref.delete();
				});
			});
	};
	// console.log(todoList);
	// console.log(setTodoList);
	return (
		<div className="list">
			<div>{list.input}</div>
			<button onClick={deleteHandler}>刪除</button>
		</div>
	);
}

export default Info;
