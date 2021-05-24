import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./MealsList.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const MealsList = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let [errorMes, setErrorMess] = useState('')

	useEffect(() => {
		axios
			.get("https://test-e3b22.firebaseio.com/meals.json")
			.then((response) => {
				setMeals(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setErrorMess("something went wrong");
				setIsLoading(false);
			});

		return () => {
			//cleanup
		};
	}, []);

	const mealsList = meals.map((meal) => <MealItem key={meal.id} mealData={meal} />);

	return (
		<section className={classes["meals-list"]}>
			<Card>{isLoading ? <p>...Loading</p> : errorMes || <ul>{mealsList}</ul>}</Card>
		</section>
	);
};

export default MealsList;
