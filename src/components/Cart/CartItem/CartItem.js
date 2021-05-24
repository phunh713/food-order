import {useContext} from 'react'
import CartContext from '../../../store/cart-context';
import classes from './CartItem.module.css'

const CartItem = (props) => {
    const cartCtx = useContext(CartContext)
	return (
		<div className={classes["cart-item"]}>
			<div>
				<h2>{props.cartItem.name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>${props.cartItem.price.toFixed(2)}</span>
					<span className={classes.amount}>x {props.cartItem.amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={() => cartCtx.onRemoveItem(props.cartItem.id)}>−</button>
				<button onClick={() => cartCtx.onAddItem({...props.cartItem, amount: 1})}>+</button>
			</div>
		</div>
	);
};

export default CartItem;
