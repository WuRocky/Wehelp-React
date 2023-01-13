import React from "react";
import db from "../lib/init-firebase";
function Data({ data, todoData, setTodoData }) {
	const deleteHandler = () => {
		// console.log(setTodoData);
		setTodoData(todoData.filter((e) => e.id !== data.id));
		db.collection("todo-list")
			.where("id", "==", data.id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					doc.ref.delete();
				});
			});
	};
	// console.log(itme.text);
	return (
		<div className="list">
			<div>{data.text}</div>
			<button onClick={deleteHandler}>刪除</button>
		</div>
	);
}

export default Data;
