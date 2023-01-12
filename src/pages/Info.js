import React from "react";

function Info({ list, todoList, setTodoList }) {
	const deleteHandler = () => {
		setTodoList(todoList.filter((e) => e.id !== list.id));
	};

	return (
		<div className="list">
			<div>{list.input}</div>
			<button onClick={deleteHandler}>刪除</button>
		</div>
	);
}

export default Info;
