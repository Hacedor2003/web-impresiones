'use client'
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import './page.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js').then((registration) => console.log('scope is: ', registration.scope));
		}
	}, []);
	return (
		<Container
			className={'contenedor'}
			fluid>
			<Link
				className={'btnHome'}
				id={'btn-imprimir'}
				href={'/solicitud'}>
				<p id={'letras'}>Reservar Impresión</p>
			</Link>
			<Link
				className={'btnHome'}
				id={'btn-invitaciones'}
				href={'/invitaciones'}>
				<p id={'letras'}>Ver nuestras Invitaciones</p>
			</Link>
		</Container>
	);
}
