import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "../Checkout/Checkout";
import axios from "axios";

const Cart = () => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);
	const cartItems = cartCtx.cartItems.map((item) => <CartItem cartItem={item} key={item.id} />);
	const totalPrice = cartCtx.cartItems
		.reduce((sum, item) => {
			return sum + item.amount * item.price;
		}, 0)
		.toFixed(2);

	const onCloseModal = () => {
		cartCtx.onHide();
		setIsCheckout(false);
	};

	const onConfirmOrder = (userInfo) => {
		axios.post("https://test-e3b22.firebaseio.com/orders.json", {
			orders: cartCtx.cartItems,
			userInfo: userInfo,
		});
        onCloseModal()
        cartCtx.onClearCart()
	};
	return cartCtx.isCartShown ? (
		<Modal onClose={onCloseModal}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalPrice}</span>
			</div>
			{!isCheckout && (
				<div className={classes.actions}>
					{+totalPrice === 0.0 ? null : (
						<button onClick={() => setIsCheckout(true)} className={classes["button--alt"]}>
							Checkout
						</button>
					)}
					<button onClick={onCloseModal} className={classes.button}>
						Close
					</button>
				</div>
			)}
			{isCheckout && <Checkout onConfirm={onConfirmOrder} onCancel={onCloseModal} />}
		</Modal>
	) : null;
};

export default Cart;
