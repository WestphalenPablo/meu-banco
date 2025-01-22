import Sidebar from "../components/Sidebar";

function Config() {
	return (
		<div className="flex">
			<Sidebar />
			<main>
                <div className="placeholder container">
                    Placeholder de navegação
                </div>
			</main>
		</div>
	);
}

export default Config;
