import "./Home.css";
import { ReactComponent as Chuno } from "../../assets/images/car-chuno.svg";

function Home() {
	return (
		<div className="home_page">
			<h1 className="app_name">Car Chuno</h1>
			<Chuno className="hero_image" />
			<p className="page_description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<button className="chuno_btn">CHUNO</button>
		</div>
	);
}

export default Home;
