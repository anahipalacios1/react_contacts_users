import Header from './componentes/Header';
import Lista from './componentes/Lista';
import LoginForm from './componentes/Login';
import { useState } from 'react';

function App() {
	const nombre = 'Anahi Palacios';

	const amigos = [
		{ nombre: 'Carlos Alcaraz', telefono: '123-456-678' },
		{ nombre: 'Jannik Sinner', telefono: '123-456-678' },
		{ nombre: 'Iga Swiatek', telefono: '123-456-678' },
		{ nombre: 'Arina Sabalenka', telefono: '123-456-678' },
	];

	const famosos = [
		{ nombre: 'Messi', telefono: '123-456-789' },
		{ nombre: 'Cristiano Ronaldo', telefono: '123-456-789' },
		{ nombre: 'Obama', telefono: '123-456-789' },
		{ nombre: 'Bill Gates', telefono: '123-456-789' },
	];

	// const sesionIniciada = true;
	const [sesionIniciada, setSesionIniciada] = useState(false);

	const cerrarSesion = () => {
		setSesionIniciada(false);
	};

	return (
		<>
			{sesionIniciada ? (
				<div className="contenedor">
					<Header nombre={nombre} />
					<Lista contactos={amigos} />
					<Lista titulo="Lista de famosos" contactos={famosos} />
					<button className="btnCerrarSesion" onClick={cerrarSesion}>
						Cerrar Sesión
					</button>
				</div>
			) : (
				<LoginForm setSesionIniciada={setSesionIniciada} />
			)}
		</>
	);
}

export default App;
