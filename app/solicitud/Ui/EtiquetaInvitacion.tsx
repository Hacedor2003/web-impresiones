import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import './styles.css';

export const EtiquetaInvitacion = () => {
	const [index, setindex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const lista = document.getElementsByClassName('styles_listaInvitaciones__2ilFO');
			const item = lista.item(0);
			const itemList = item?.children.item(index);
			if (index === 4) {
				setindex(0);
			}

			for (let indexpreview = 0; item?.children && indexpreview < item?.children.length; indexpreview++) {
				const itemListPreview = item?.children.item(indexpreview);
				if (itemListPreview?.getAttribute('id')) {
					itemListPreview.removeAttribute('id');
				}
			}

			itemList?.setAttribute('id', 'activo');
			setindex((item) => item + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [index]);

	return (
		<>
			<ul className={styles.listaInvitaciones}>
				<li className={styles.itemListaInvitaciones} id='activo'>
					<small id='boda'>Bodas</small>
				</li>
				<li className={styles.itemListaInvitaciones}>
					<small id='quince'>Quinces</small>
				</li>
				<li className={styles.itemListaInvitaciones}>
					<small id='cumpleano'>Cumpleaños</small>
				</li>
				<li className={styles.itemListaInvitaciones}>
					<small id='bautizo'>Bautizos</small>
				</li>
			</ul>
		</>
	);
};
