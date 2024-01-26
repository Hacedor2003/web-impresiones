import { Container } from 'react-bootstrap';
import Link from 'next/link';
import './page.css';

export default function Home() {
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
