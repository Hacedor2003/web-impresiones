import React from 'react';
import { UiTarjeta } from './UiTarjeta';
import estilos from './estilos.module.css';

export const Horario = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<main className={estilos.Contenedor}>
				<h2>Horario:</h2>
				<section>
					<ul>
						<li>
							<h4>LUNES: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>MARTES: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>MIERCOLES: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>JUEVES: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>VIERNES: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>SABADO: 9:00 AM - 5:00 PM</h4>
						</li>
						<li>
							<h4>DOMINGO: 9:00 AM - 5:00 PM</h4>
						</li>
					</ul>
				</section>
			</main>
		</UiTarjeta>
	);
};
