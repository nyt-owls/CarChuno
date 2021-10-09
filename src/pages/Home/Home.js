import "./Home.css";
import { ReactComponent as Chuno } from "../../assets/images/car-chuno.svg";

function Home() {
	return (
		<div className="home_page">
			<h1 className="app_name">Car Chuno</h1>
			<div className="hero_container">
				<Chuno className="hero_image" />
			</div>
			<p className="page_description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<button className="chuno_btn">Chuno</button>
		</div>
	);
}

export default Home;
