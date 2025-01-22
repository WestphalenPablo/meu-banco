import background from "../assets/images/portrait-woman-holding-card.png";
import logoWhite from "../assets/images/logo-white.svg";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();

	return (
		<div className="flex">
			<div
				className="login-image"
				style={{ backgroundImage: `url(${background})` }}
			>
				<img src={logoWhite} className="logo" alt="meu banco" />
			</div>
			<div className="login-form">
				<div>
					<div className="welcome">
						<h1>
							Bem vindo <span className="text-primary">:)</span>
						</h1>
						<p>Entre na sua conta</p>
					</div>
					<form
						onSubmit={() => {
							navigate("/painel");
						}}
					>
						<div className="input-group">
							<label htmlFor="username">Usuário</label>
							<input type="text" id="username" className="block" />
						</div>
						<div>
							<label htmlFor="password">Senha</label>
							<input type="text" id="password" className="block" />
						</div>
						<div className="input-group remember-wrapper">
							<div>
								<input type="checkbox" />
								<label htmlFor="remember">Lembrar dispositivo</label>
							</div>
							<div>
								<a href="#">Esqueceu sua senha?</a>
							</div>
						</div>
						<input type="submit" value="Entrar" />
					</form>

					<p className="text-center text-2xl weight-300">
						Não tem conta?{" "}
						<a href="#" className="text-2xl font-bold text-primary">
							Faça uma agora
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
