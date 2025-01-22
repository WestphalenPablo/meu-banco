import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Transfers from "./pages/Transfers";
import Services from "./pages/Services";
import Config from "./pages/Config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/painel" element={<Dashboard />} />
				<Route path="/carteira" element={<Wallet />} />
				<Route path="/transferencias" element={<Transfers />} />
				<Route path="/servicos" element={<Services />} />
				<Route path="/configuracoes" element={<Config />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
