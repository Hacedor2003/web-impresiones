'use client';
import classes from './Styles/styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styles from './estyles.module.css';
import { EtiquetaInvitacion } from './Ui/EtiquetaInvitacion';
import { Main } from './Ui/Main';

export default function Page() {
	return (
		<Main>
			<header className={classes.headerCard}>Que desea?</header>
			<div className={styles.contenedor}>
				<ul className={styles.Lista}>
					<li className={styles.ItemLista}>
						<Link href={'/solicitud/Fotocopia'}>
							<Image
								src='/perfil.jpg'
								alt='foto de perfil'
								width={150}
								height={150}
							/>
							<section>
								<span>Fotocopia:</span>
								<span>Precio:</span>
								<span>Description:</span>
								<p>Envie su documento o foto para imprimir y recogerlo más tarde</p>
							</section>
						</Link>
					</li>
					<li className={styles.ItemLista}>
						<Link href={'/solicitud/Retoque_Fotografico'}>
							<Image
								src='/perfil.jpg'
								alt='foto de perfil'
								width={150}
								height={150}
							/>
							<section>
								<span>Retoque Fotografico:</span>
								<span>Precio:</span>
								<span>Description:</span>
								<p>Envie su foto con una descripción para añarle efectos o retoques</p>
							</section>
						</Link>
					</li>
					<li className={styles.ItemLista}>
						<Link href={'/solicitud/Diseno_Documentos'}>
							<Image
								src='/perfil.jpg'
								alt='foto de perfil'
								width={150}
								height={150}
							/>
							<section>
								<span>Diseño e impresiòn de documentos:</span>
								<span>Precio:</span>
								<span>Description:</span>
								<p>Envie una descripción para diseñar un documento y recojer más tarde el documento</p>
							</section>
						</Link>
					</li>
					<li className={styles.ItemLista}>
						<Link href={'/solicitud/Diseno_Invitaciones'}>
							<Image
								src='/perfil.jpg'
								alt='foto de perfil'
								width={150}
								height={150}
							/>
							<section>
								<span>Tarjetas de Presentación y Diseño de invitaciones:</span>
								<span>Precio:</span>
								<span>Description:</span>
								<p>Envie unos datos para imprimir las invitaciones deseada para sus</p>
								<small>
									<EtiquetaInvitacion />
								</small>
							</section>
						</Link>
					</li>
				</ul>
			</div>
		</Main>
	);
}
