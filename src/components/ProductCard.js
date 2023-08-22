import React from "react";
import Badge from "react-bootstrap/Badge";

const ProductCard = ({ item }) => {
	const arrangePrice = (price) => {
		return `₩${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	};
	return (
		<div className="card">
			<img src={item?.img} alt={item?.title} width="210" height="315" />

			<div>{item.title}</div>
			<div>{arrangePrice(item.price)}</div>
			<div className="choice">
				{item?.choice === true ? "Concious choice" : " "}
			</div>
			<div className="new">
				{item?.new === true ? (
					<Badge pill variant="danger">
						New
					</Badge>
				) : (
					" "
				)}
			</div>
		</div>
	);
};

export default ProductCard;
