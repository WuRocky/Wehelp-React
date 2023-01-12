import React from "react";
import Info from "./Info";
function List({ todoList, setTodoList }) {
	return (
		<div>
			{todoList.map((list) => (
				<Info
					list={list}
					todoList={todoList}
					setTodoList={setTodoList}
					key={list.id}
				/>
			))}
		</div>
	);
}

export default List;
