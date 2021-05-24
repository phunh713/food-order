import { Fragment } from "react";
import MealsList from "./MealsList/MealsList";
import MealSummary from "./MealSummary/MealSummary";

const Meals = () => {
	return (
		<Fragment>
			<MealSummary />
			<MealsList />
		</Fragment>
	);
};

export default Meals;
