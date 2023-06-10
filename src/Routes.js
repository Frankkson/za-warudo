import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route
					path="/"
					element={<PaginaPadrao />}
				>
					<Route
						path="/"
						element={<Inicio />}
					></Route>
					<Route
						path="/Sobre-Mim"
						element={<SobreMim />}
					></Route>
				</Route>
				<Route
					path="*"
					element={<div>Deu ruim, champs</div>}
				></Route>
			</Routes>
			<Rodape />
		</BrowserRouter>
	);
}

export default AppRoutes;

