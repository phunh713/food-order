import React from "react";

const ctx = {
	isCartShown: false,
	cartItems: [],
	newItemAdded: false,
	onShow: () => {},
	onHide: () => {},
	onAddItem: (item) => {},
	onRemoveItem: (id) => {},
	onClearCart: () => {},
};
const CartContext = React.createContext(ctx);

export default CartContext;
