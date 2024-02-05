'use client';
import { useState } from 'react';
import styles from '../estyles.module.css';
import handleClickRemove from '../Components/handleClickRemove';
import HandleClickAdd from '../Components/HandleClickAdd';
import { Main } from '../UI/Ui';
import HandleClickDiv from '../Components/handleClickDiv';
import { ListaDeHojas } from '../UI/ListaDeHojas';
import estilos from '../Styles/styles.module.css';
import { BotonesFlechas } from '../UI/BotonesFlechas';

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
			<BotonesFlechas
				clicks={clicks}
				setclicks={setclicks}
			/>
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
					<p className={styles.letter}>Invitaciones de Boda</p>
				</section>
				<ListaDeHojas />
				<p>Fin</p>
			</div>
			{content}
		</Main>
	);
}
