
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

	return (
		<CartProvider>
			<Header />
			<Meals />
			<Cart />
		</CartProvider>
	);
}

export default App;
