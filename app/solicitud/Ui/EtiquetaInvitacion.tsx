import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';
import './styles.css';

export const EtiquetaInvitacion = () => {
	const [index, setIndex] = useState(0);
	const itemListRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			const itemList = itemListRef.current?.children as HTMLCollection;
			const nextIndex = (index + 1) % (itemList?.length || 0);

			for (let i = 0; i < (itemList?.length || 0); i++) {
				(itemList[i] as HTMLElement)?.removeAttribute('id');
			}

			(itemList[nextIndex] as HTMLElement)?.setAttribute('id', 'activo');

			setIndex(nextIndex);
		}, 1500);

		return () => clearInterval(interval);
	}, [index]);

	const items = ['Bodas', 'Quinces', 'Cumpleaños', 'Bautizos'];

	return (
		<ul
			className={styles.listaInvitaciones}
			ref={itemListRef}>
			{items.map((item, idx) => (
				<li
					key={idx}
					className={styles.itemListaInvitaciones}
					id={index === idx ? 'activo' : ''}>
					<>{item}</>
				</li>
			))}
		</ul>
	);
};
