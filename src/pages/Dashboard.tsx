import Sidebar from "../components/Sidebar";
import Icon from "../components/Icon";
import imageCard from "../assets/images/card.png";

function Dashboard() {
	return (
		<div className="flex">
			<Sidebar />
			<main>
				<div className="top-bar container">
					<div className="search-bar">
						<Icon name="search" stroke="#fff" />
						<input type="search" placeholder="Buscar" />
					</div>
					<div className="flex items-center">
						<Icon name="bell" stroke="#fff" style={{ marginRight: "24px" }} />
						<div className="welcome flex items-center">
							<Icon
								name="person"
								stroke="#fff"
								style={{ marginRight: "8px" }}
							/>
							<span>
								Bem vindo, <strong>Tide Cardoso</strong>
							</span>
						</div>
					</div>
				</div>
				<div className="cards container">
					<div className="card">
						<span className="number-variation">+23%</span>
						<span className="description">Gasto esse mês</span>
						<span className="card-value">R$ 3.547,67</span>
					</div>
					<div className="card">
						<span className="number-variation">+6%</span>
						<span className="description">Recebido esse mês</span>
						<span className="card-value">R$ 7.648,48</span>
					</div>
					<div className="card">
						<span className="badge">+ R$ 242,13 (+2.54%)</span>
						<span className="description">Investimentos</span>
						<span className="card-value">R$ 9.532,62</span>
					</div>
					<div className="card">
						<span className="description">Cartões</span>
						<span className="card-value">R$ 9.532,62</span>
					</div>
					<div className="card action-card">
						<Icon name="plus-circle" />
						<span className="description">configurar atalhos</span>
					</div>
				</div>
				<div className="flex col-gap-24 container items-start">
					<div className="user-cards shadow-1">
						<h2>Cartões</h2>
						<div className="flex col-gap-57 mb-16">
							<img src={imageCard} />
							<div className="flex flex-column flex-1 justify-between">
								<div>
									<div className="weight-300">Limite disponível</div>
									<div className="font-24 weight-600">R$ 3.000,00</div>
								</div>
								<div>
									<span className="weight-300">Última compra</span>
									<div className="flex justify-between weight-600">
										<span>Bazar Mituzi</span>
										<span>R$ 300,00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex col-gap-57">
							<div className="flex-1">
								<progress max="3000" value="300"></progress>
								<div className="flex justify-between">
									<span>Limite mensal</span>
									<span>R$ 300/3.000</span>
								</div>
							</div>
							<div className="flex-1">
								<a href="">Mais detalhes</a>
							</div>
						</div>
					</div>
					<div className="last-purchases shadow-1">
						<h2>Últimas compras</h2>
						<div className="mb-24">
							<h3 className="weight-700 font-14 text-primary">03/jan</h3>
							<table className="table-report">
								<tbody>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="mb-24">
							<h3 className="weight-700 font-14 text-primary">02/jan</h3>
							<table className="table-report">
								<tbody>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
									<tr>
										<td>
											<p className="title">Bazar Mizutu</p>
											<p className="description">Compra no crédito</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="mb-24">
							<h3 className="weight-700 font-14 text-primary">03/jan</h3>
							<table className="table-report">
								<tbody>
									<tr>
										<td>
											<p className="title">Restaurante italiano</p>
										</td>
										<td className="amount positive">R$ 300,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<a href="#" className="btn-primary w-fit-content mx-auto">
							Ver extrato
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Dashboard;
