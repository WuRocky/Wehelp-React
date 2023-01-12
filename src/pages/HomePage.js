import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
	return (
		<div>
			<h1 className="div-item-1">React 練習專案</h1>
			<h1 className="div-item-2">歡迎光臨我的頁面</h1>
			<div className="div-item-3">
				<Link to="/list">
					<button>點此開始</button>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
