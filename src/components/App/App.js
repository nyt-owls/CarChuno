import "./App.css";
import { ReactComponent as Chuno } from "../../assets/images/car-chuno.svg";

function App() {
	return (
		<div className="App">
			<h1 className="app_name">Car Chuno</h1>
			<div className="hero_container">
				<Chuno className="hero_image" />
			</div>
			<button className="chuno_btn">Chuno</button>
		</div>
	);
}

export default App;
