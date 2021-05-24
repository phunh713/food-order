import React, { useContext, createRef } from "react";
import CartContext from "../../../../store/cart-context";

import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const cartCtx = useContext(CartContext);
	const inputRef = createRef();
	return (
		<form className={classes.form}>
			<Input
				ref={inputRef}
				label="Amount"
				input={{ type: "number", id: props.mealData.id, defaultValue: 1, min: 1 }}
			/>
			<button
				type="button"
				onClick={() => cartCtx.onAddItem({ ...props.mealData, amount: +inputRef.current.value })}
			>
				Add
			</button>
		</form>
	);
};

export default MealItemForm;
