import { Metadata } from 'next';
import { Container } from 'react-bootstrap';
import styles from './styles.module.css';

export const metadata: Metadata = {
	title: 'Solicitud de Impresiòn',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			<header className={styles.headerCard}>Añadir Solicitud de Impresion:</header>
			<>{children}</>
		</Container>
	);
}
