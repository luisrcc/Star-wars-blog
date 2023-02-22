import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STARWARS</span>
			</Link>

			<Favorites />
		</nav>
	);
};

