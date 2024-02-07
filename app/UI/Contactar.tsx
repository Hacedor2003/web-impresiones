import { UiTarjeta } from './UiTarjeta';
import estilos from './estilos.module.css';

export const Contactar = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<main className={estilos.Contenedor}>
				<h2>Contactar al:</h2>
				<section>
					<h3>Telefono Movil:</h3>
					<ul>
						<li>Cary:</li>
						<li>Ricardo:</li>
					</ul>
					<h3>Correo:</h3>
					<ul>
						<li>Cary:</li>
					</ul>
					<h3>Telegram:</h3>
					<ul>
						<li>Cary:</li>
					</ul>
				</section>
			</main>
		</UiTarjeta>
	);
};
