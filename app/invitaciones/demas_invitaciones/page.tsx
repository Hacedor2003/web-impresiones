'use client';
import { useState } from 'react';
import styles from '../estyles.module.css';
import handleClickRemove from '../Components/handleClickRemove';
import HandleClickAdd from '../Components/HandleClickAdd';
import { Main } from '../UI/Ui';
import { ListaDeHojas } from '../UI/ListaDeHojas';
import HandleClickDiv from '../Components/handleClickDiv';
import estilos from '../Styles/styles.module.css';

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
		<Main>
			<div
				className={estilos.Book}
				id='book'>
				<section
					className={estilos.Cover}
					id='cover'
					onClick={() => HandleClickDiv({ clicks, setclicks })}>
					<p className={styles.letter}>Demas Invitaciones</p>
				</section>
				<ListaDeHojas />
				<p>Fin</p>
			</div>
			{content}
		</Main>
	);
}
