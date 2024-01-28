import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';
import './styles.css';

export const EtiquetaInvitacion = () => {
	const [index, setIndex] = useState(0);
	const itemListRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			const itemList = itemListRef.current?.children;
			const nextIndex = (index + 1) % itemList.length;

			for (let i = 0; i < itemList.length; i++) {
				itemList[i].removeAttribute('id');
			}

			itemList[nextIndex].setAttribute('id', 'activo');

			setIndex(nextIndex);
		}, 1500);

		return () => clearInterval(interval);
	}, [index]);

	return (
		<ul
			className={styles.listaInvitaciones}
			ref={itemListRef}>
			<li
				className={styles.itemListaInvitaciones}
				id={index === 0 ? 'activo' : ''}>
				<small>Bodas</small>
			</li>
			<li
				className={styles.itemListaInvitaciones}
				id={index === 1 ? 'activo' : ''}>
				<small>Quinces</small>
			</li>
			<li
				className={styles.itemListaInvitaciones}
				id={index === 2 ? 'activo' : ''}>
				<small>Cumpleaños</small>
			</li>
			<li
				className={styles.itemListaInvitaciones}
				id={index === 3 ? 'activo' : ''}>
				<small>Bautizos</small>
			</li>
		</ul>
	);
};
