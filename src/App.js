import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/product" element={<ProductAll />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/product/:id" element={<ProductDetail />}></Route>
			</Routes>
		</div>
	);
}

export default App;

// 1. 전체 상품페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있음.
// 3. 로그인 버튼을 누르면 로그인페이지가 나온다
// 4. 상품디테일을 눌렀으나, 로그인이 안됐을경우 로그인페이지가 먼저 나온다.
// 5. 로그인이 됐을 경우 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고 로그인페이지가 보인다.
// 8. 로그인하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.
