'use client';
import styles from './estyles.module.css';
import classes from '../solicitud/Reservar_Impresion/styles.module.css';
import Link from 'next/link';
import { ContendorInvitaciones } from './UI/estilos';
import Image from 'next/image';

export default function Page() {
	return (
		<main className={styles.contenedor}>
			<header className={classes.headerCard}>Todas las invitaciones:</header>
			<div className={styles.contenedorInvitaciones}>
				<ContendorInvitaciones>
					<Link href={'/invitaciones/invitaciones_de_boda'}>
						<Image
							src='/perfil.jpg'
							alt='perfil'
							width={400}
							height={400}
						/>
						<p>Invitaciones de Boda</p>
					</Link>
				</ContendorInvitaciones>
				<ContendorInvitaciones>
					<Link href={'/invitaciones/invitaciones_de_quince'}>
						<Image
							src='/perfil.jpg'
							alt='perfil'
							width={400}
							height={400}
						/>
						<p>Invitaciones de Quince</p>
					</Link>
				</ContendorInvitaciones>
				<ContendorInvitaciones>
					<Link href={'/invitaciones/demas_invitaciones'}>
						<Image
							src='/perfil.jpg'
							alt='perfil'
							width={400}
							height={400}
						/>
						<p>Demas Invitaciones</p>
					</Link>
				</ContendorInvitaciones>
			</div>
		</main>
	);
}
