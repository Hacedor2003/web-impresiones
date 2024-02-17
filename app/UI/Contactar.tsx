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
						<li>Cary: +53 5820838 </li>
						<li>Bryan: +53 58505864</li>
					</ul>
					<h3>Correo:</h3>
					<ul>
						<li>Cary: rparra66@gmail.com </li>
					</ul>
					<h3>Telegram:</h3>
					<ul>
						<li>Bryan: @Bryan_Lenier</li>
					</ul>
				</section>
			</main>
		</UiTarjeta>
	);
};
