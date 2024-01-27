'use client';
import { useState } from 'react';
import styles from '../estyles.module.css';
import handleClickRemove from '../Components/handleClickRemove';
import HandleClickAdd from '../Components/HandleClickAdd';
import { Book, Cover } from '../UI/Ui';
import { ListaDeHojas } from './UI/ListaDeHojas';

export default function Page() {
	const [clicks, setclicks] = useState(0);
	const [desabilitado, setDesabilitado] = useState(false);

	const props = {
		clicks,
		setclicks,
		setDesabilitado,
	};

	function handleClickDiv() {
		const portada = document.querySelector('.POOQi');
		if (clicks === 0) {
			portada?.classList.add('estyles_abrir__Z13ze');
			setclicks(1);
		} else if (clicks === 1) {
			portada?.classList.remove('estyles_abrir__Z13ze');
			setclicks(0);
		}
	}

	const content =
		clicks != 0 ? (
			<div className={styles.contenedorBtn}>
				<button
					type='button'
					onClick={() => handleClickRemove(props)}>
					Atras
				</button>
				<button
					type='button'
					disabled={desabilitado}
					onClick={() => HandleClickAdd(props)}>
					Siguiente
				</button>
			</div>
		) : null;

	return (
		<main className={styles.contenedor}>
			<Book>
				<Cover onClick={() => handleClickDiv()}>
					<p className={styles.letter}>Demas Invitaciones</p>
				</Cover>
				<ListaDeHojas />
				<p>Fin</p>
			</Book>
			{content}
		</main>
	);
}
