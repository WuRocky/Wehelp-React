import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import List from "./List";
import { Link } from "react-router-dom";
import db from "../lib/init-firebase";
function ListPage() {
	const [todoData, setTodoData] = useState([]);
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		db.collection("todo-list")
			.get()
			.then((snapshot) => {
				const data = snapshot.docs.map((doc) => doc.data());
				setTodoData(data);
			});
	}, []);

	return (
		<div>
			<AddForm todoList={todoList} setTodoList={setTodoList} />
			<hr />
			<List
				todoList={todoList}
				setTodoList={setTodoList}
				todoData={todoData}
				setTodoData={setTodoData}
			/>

			<div className="div-item-3">
				<Link to="/">
					<button>回首頁</button>
				</Link>
			</div>
		</div>
	);
}

export default ListPage;
