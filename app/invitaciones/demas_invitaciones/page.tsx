'use client';
import { useState } from 'react';
import styles from '../estyles.module.css';
import handleClickRemove from '../Components/handleClickRemove';
import HandleClickAdd from '../Components/HandleClickAdd';
import { Book, Cover } from '../UI/Ui';
import { ListaDeHojas } from './UI/ListaDeHojas';
import HandleClickDiv from '../Components/handleClickDiv';

export default function Page() {
	const [clicks, setclicks] = useState(0);
	const [desabilitado, setDesabilitado] = useState(false);

	const props = {
		clicks,
		setclicks,
		setDesabilitado,
	};
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
			<Book id='book'>
				<Cover
					id='cover'
					onClick={() => HandleClickDiv({clicks, setclicks})}>
					<p className={styles.letter}>Demas Invitaciones</p>
				</Cover>
				<ListaDeHojas />
				<p>Fin</p>
			</Book>
			{content}
		</main>
	);
}
