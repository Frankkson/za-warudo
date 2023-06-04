import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Inicio />}
				></Route>
				<Route
					path="/Sobre-Mim"
					element={<SobreMim />}
				></Route>
				<Route
					path="*"
					element={<div>Deu ruim, champs</div>}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

