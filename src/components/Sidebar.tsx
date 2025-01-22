import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";
import logoColor from "../assets/images/logo-color.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<img
				src={logoColor}
				alt="meu banco"
				style={{ position: "absolute", top: "32px", left: "32px" }}
			/>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/painel"
							className={({ isActive }) => (isActive ? "current" : "")}
						>
							<Icon name="house" stroke="#fff" /> Painel
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/carteira"
							className={({ isActive }) => (isActive ? "current" : "")}
						>
							<Icon name="wallet" stroke="#484848" /> Carteira
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/transferencias"
							className={({ isActive }) => (isActive ? "current" : "")}
						>
							<Icon name="transfer" stroke="#484848" />
							Transferências
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/servicos"
							className={({ isActive }) => (isActive ? "current" : "")}
						>
							<Icon name="grid" stroke="#484848" />
							Serviços
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/configuracoes"
							className={({ isActive }) => (isActive ? "current" : "")}
						>
							<Icon name="gear" stroke="#484848" />
							Configurações
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="help-card">
				<h2 className="font-bold text-2xl mb-16">
					Precisa de <br />
					ajuda?
				</h2>
				<p className="mb-16">Fale com um de nossos especialistas</p>
				<a href="#">Contatar</a>
			</div>
		</div>
	);
}

export default Sidebar;
