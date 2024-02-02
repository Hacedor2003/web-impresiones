'use client';
import styles from './estyles.module.css';
import classes from '../solicitud/Styles/styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Main } from './UI/Ui';

export default function Page() {
	return (
		<Main>
			<header className={classes.headerCard}>Todas las invitaciones:</header>
			<div className={styles.contenedorDeLasInvitaciones}>
				<div className={styles.ContendorInvitaciones}>
					<Link href={'/invitaciones/invitaciones_de_boda'}>
						<Image
							src='/invitacion.jpg'
							alt='invitacion'
							width={400}
							height={400}
						/>
						<p>Invitaciones de Boda</p>
					</Link>
				</div>
				<div className={styles.ContendorInvitaciones}>
					<Link href={'/invitaciones/invitaciones_de_quince'}>
						<Image
							src='/invitacion.jpg'
							alt='invitacion'
							width={400}
							height={400}
						/>
						<p>Invitaciones de Quince</p>
					</Link>
				</div>
				<div className={styles.ContendorInvitaciones}>
					<Link href={'/invitaciones/demas_invitaciones'}>
						<Image
							src='/invitacion.jpg'
							alt='invitacion'
							width={400}
							height={400}
						/>
						<p>Demas Invitaciones</p>
					</Link>
				</div>
			</div>
		</Main>
	);
}
