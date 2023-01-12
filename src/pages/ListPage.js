import React, { useState } from "react";
import AddForm from "./AddForm";
import List from "./List";
import { Link } from "react-router-dom";

function ListPage() {
	const [todoList, setTodoList] = useState([]);

	return (
		<div>
			<AddForm todoList={todoList} setTodoList={setTodoList} />
			<hr />
			<List todoList={todoList} setTodoList={setTodoList} />
			<div className="div-item-3">
				<Link to="/">
					<button>回首頁</button>
				</Link>
			</div>
		</div>
	);
}

export default ListPage;
