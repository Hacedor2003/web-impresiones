import { useEffect, useState, useRef } from 'react';
import './styles.css';

export const EtiquetaInvitacion = () => {
	const [festividad, setfestividad] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const items = ['Bodas', 'Quinces', 'Cumpleaños', 'Bautizos'];
		const interval = setInterval(() => {
			if (index < 4) {
				setfestividad(items[index]);
			} else {
				setIndex(0);
			}
			setIndex((item) => item + 1);
		}, 1500);

		return () => clearInterval(interval);
	}, [index]);

	return festividad;
};
