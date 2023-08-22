import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const menulist = [
		"여성",
		"Divided",
		"남성",
		"신생아/유아",
		"아동",
		"H&M Home",
		"Sale",
		"지속가능성",
	];
	const navigate = useNavigate();
	const login = () => {
		navigate("/login");
	};
	return (
		<div>
			<div>
				<div className="login-button" onClick={login}>
					<FontAwesomeIcon icon={faUser} />
					<div>Login</div>
				</div>
			</div>
			<div className="nav-section">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
					alt="logo"
					width="100"
				/>
			</div>
			<div className="menu-area">
				<ul className="menulist">
					{menulist.map((menu, index) => (
						<li key={index}>{menu}</li>
					))}
				</ul>
				<div className="searchBar">
					<FontAwesomeIcon icon={faSearch} />
					<input type="text" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
