import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
	const [formValid, setFormValid] = useState({
		name: true,
		street: true,
		postal: true,
		city: true,
	});
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const isEmpty = (value) => !!value.trim();
	const isFiveChar = (value) => value.length === 5;

	const confirmHandler = (event) => {
		event.preventDefault();

		setFormValid({
			name: isEmpty(nameInputRef.current.value),
			street: isEmpty(streetInputRef.current.value),
			postal: isFiveChar(postalInputRef.current.value),
			city: isEmpty(cityInputRef.current.value),
		});

		const isFormValid =
			isEmpty(nameInputRef.current.value) &&
			isEmpty(streetInputRef.current.value) &&
			isFiveChar(postalInputRef.current.value) &&
			isEmpty(cityInputRef.current.value);

		if (isFormValid) {
			props.onConfirm({
				name: nameInputRef.current.value,
				street: streetInputRef.current.value,
				postal: postalInputRef.current.value,
				city: cityInputRef.current.value,
			});
		}
	};

	return (
		<form onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formValid.name && <p className={classes.error}>Please enter valid name</p>}
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formValid.street && <p className={classes.error}>Please enter valid street</p>}
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formValid.postal && <p className={classes.error}>Please enter valid postal code</p>}
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formValid.city && <p className={classes.error}>Please enter valid city</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
