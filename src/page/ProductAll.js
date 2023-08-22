import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductAll = () => {
	useEffect(() => {
		getProduct();
	}, []);
	const [productList, setProductList] = useState([]);
	const getProduct = async () => {
		let res = await (await fetch(`http://localhost:3005/products`)).json();
		console.log(res);
		setProductList(res);
	};

	return (
		<div>
			<Container>
				<Row>
					{productList.map((menu) => (
						<Col lg={3} key={menu.id}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;
