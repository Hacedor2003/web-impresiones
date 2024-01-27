'use client';
import { useState } from 'react';
import styles from './estyles.module.css';

export default function Page() {
	const [clicks, setclicks] = useState(1);
	function handleClickAdd() {
		// Obtener el elemento con la clase "Panel"
		if (clicks === 1) {
			const portada = document.querySelector('.estyles_cover__S17X0');

			// Agregar la clase "abrir" para aplicar los estilos
			portada?.classList.add('estyles_abrir__Z13ze');
			setclicks(2);
		}
		if (clicks === 2) {
			const portada = document.querySelector('.estyles_hoja1__Rvb2f');

			// Agregar la clase "abrir" para aplicar los estilos
			portada?.classList.add('estyles_abrir__Z13ze');
			setclicks(3);
		}
		if (clicks === 3) {
			const portada = document.querySelector('.estyles_hoja2__6_kK5');

			// Agregar la clase "abrir" para aplicar los estilos
			portada?.classList.add('estyles_abrir__Z13ze');
			setclicks(4);
		}
		if (clicks >= 4) {
			const portada = document.querySelector('.estyles_hoja__ublda');

			// Agregar la clase "abrir" para aplicar los estilos
			portada?.classList.add('estyles_abrir__Z13ze');
		}
	}
	function handleClickRemobe() {
		// Obtener el elemento con la clase "Panel"
		if (clicks === 2) {
			const portada = document.querySelector('.estyles_cover__S17X0');

			portada?.classList.add('estyles_cerrar__Peesz');
			setclicks(1);
		}
		if (clicks === 3) {
			const portada = document.querySelector('.estyles_hoja1__Rvb2f estyles_abrir__Z13ze');

			portada?.classList.remove('estyles_abrir__Z13ze');
			setclicks(2);
		}
		if (clicks === 4) {
			const portada = document.querySelector('.estyles_hoja2__6_kK5 estyles_abrir__Z13ze');

			portada?.classList.remove('estyles_abrir__Z13ze');
			setclicks(3);
		}
		if (clicks >= 4) {
			const portada = document.querySelector('.estyles_hoja__ublda estyles_abrir__Z13ze');

			portada?.classList.remove('estyles_abrir__Z13ze');
		}
	}

	return (
		<main className={styles.contenedor}>
			<div className={styles.book}>
				<div className={styles.cover}>
					<p className={styles.letter}>Invitaciones de Boda</p>
				</div>

				<div className={styles.hoja1}> Hoja 1</div>
				<div className={styles.hoja2}> Hoja 2</div>
				<div className={styles.hoja}> Hoja 3</div>
			</div>
			<div className={styles.contenedorBtn}>
				<button
					type='button'
					onClick={() => handleClickRemobe()}>
					Atras
				</button>
				<button
					type='button'
					onClick={() => handleClickAdd()}>
					Siguiente
				</button>
			</div>
		</main>
	);
}
