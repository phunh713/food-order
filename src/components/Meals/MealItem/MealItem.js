import MealItemForm from "./MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.mealData.name}</h3>
				<div className={classes.description}>{props.mealData.description}</div>
				<div className={classes.price}>${props.mealData.price.toFixed(2)}</div>
			</div>
			<div>
				<MealItemForm mealData={props.mealData} />
			</div>
		</li>
	);
};

export default MealItem;
