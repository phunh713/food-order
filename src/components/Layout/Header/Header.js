import { Fragment } from "react";
import headerImg from "../../../assets/images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h2>Food Order</h2>
				<HeaderCartButton />
			</header>
			<div className={classes["main-image"]}>
				<img src={headerImg} alt="a table full of food" />
			</div>
		</Fragment>
	);
};

export default Header;
