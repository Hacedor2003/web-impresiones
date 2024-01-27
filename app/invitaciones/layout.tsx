import { Metadata } from 'next';
import { Container } from 'react-bootstrap';
import styles from '../solicitud/styles.module.css'

export const metadata: Metadata = {
	title: 'Solicitud',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Container fluid>
			<header className={styles.headerCard}>Todas las invitaciones:</header>
			<Container>{children}</Container>
		</Container>
	);
}
