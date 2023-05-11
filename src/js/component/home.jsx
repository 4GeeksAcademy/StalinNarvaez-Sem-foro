import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./semaforo.jsx";
import BotonAgregarColor from "./botonagregar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Semaforo/>
			<BotonAgregarColor/>
		</div>
	);
};

export default Home;
