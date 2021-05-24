import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../../store/cart-context";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
	const cartCtx = useContext(CartContext);
	const [newItemAdded, setNewItemAdded] = useState(false);
	const classList = `${classes.button} ${newItemAdded ? classes.bump : ""}`;
	useEffect(() => {
		let timer;
		if (cartCtx.cartItems.length !== 0) {
			timer = setTimeout(() => setNewItemAdded(true), 10);
		}

		return () => {
			setNewItemAdded(false);
			clearTimeout(timer);
		};
	}, [cartCtx.cartItems]);
	return (
		<button className={classList} onClick={cartCtx.onShow}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{cartCtx.cartItems.reduce((sum, item) => sum + item.amount, 0)}</span>
		</button>
	);
};

export default HeaderCartButton;
