import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
	//Cart Reducer
	const initialCartState = {
		isCartShown: false,
		cartItems: [],
	};
	const cartReducer = (state, action) => {
		switch (action.type) {
			case "SHOW_CART":
				return { ...state, isCartShown: true };

			case "HIDE_CART":
				return { ...state, isCartShown: false };

			case "ADD_ITEM":
				const foundIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
				if (foundIndex === -1) {
					//NOT found
					return { ...state, cartItems: [...state.cartItems, action.payload] };
				} else {
					//DO found
					const updatedCartItems = state.cartItems.map((item) => {
						if (item.id === action.payload.id)
							return { ...item, amount: item.amount + action.payload.amount };
						return item;
					});
					return { ...state, cartItems: updatedCartItems };
				}
			case "REMOVE_ITEM":
				let copiedCartItems;
				const removedItemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

				if (state.cartItems[removedItemIndex].amount > 1) {
					copiedCartItems = state.cartItems.map((item) => {
						if (item.id === action.payload) {
							return { ...item, amount: item.amount - 1 };
						} else {
							return item;
						}
					});
				} else {
					copiedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
				}
				return { ...state, cartItems: copiedCartItems };

			case "CLEAR_CART":
				return initialCartState;
			default:
				return state;
		}
	};

	//Cart Reducer
	const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

	const showCartHandler = () => dispatchCart({ type: "SHOW_CART" }); //fnc show cart
	const hideCartHandler = () => dispatchCart({ type: "HIDE_CART" }); //fnc hide cart
	const addItemToCart = (item) => dispatchCart({ type: "ADD_ITEM", payload: item });
	const removeItemFromCart = (id) => dispatchCart({ type: "REMOVE_ITEM", payload: id });
	const clearCart = () => dispatchCart({ type: "CLEAR_CART" });

	const cartCtxValue = {
		isCartShown: cartState.isCartShown,
		cartItems: cartState.cartItems,
		onShow: showCartHandler,
		onHide: hideCartHandler,
		onAddItem: addItemToCart,
		onRemoveItem: removeItemFromCart,
		onClearCart: clearCart,
	};
	return <CartContext.Provider value={cartCtxValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
