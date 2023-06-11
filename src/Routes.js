import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";

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
						path="sobre-mim"
						element={<SobreMim />}
					></Route>
					<Route
						path="posts/:id"
						element={<Post />}
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

