import React from "react";
import Info from "./Info";
import Data from "./Data";
function List({ todoList, setTodoList, todoData, setTodoData }) {
	return (
		<div>
			{todoData.map((data) => (
				<Data
					data={data}
					todoData={todoData}
					setTodoData={setTodoData}
					text={data.text}
					key={data.id}
				/>
			))}

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
