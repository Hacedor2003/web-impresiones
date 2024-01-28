'use client';
import classes from './Styles/styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styles from './estyles.module.css';
import { EtiquetaInvitacion } from './Ui/EtiquetaInvitacion';
import styled from 'styled-components';

const Lista = styled.ul`
	list-style: none;
`;

const ItemLista = styled.li`
	margin: 6px;
	width: 100%;
	padding: 6px;
	transition: 0.3s ease-in-out;
	-webkit-transition: 0.3s ease-in-out;
	-moz-transition: 0.3s ease-in-out;
	-ms-transition: 0.3s ease-in-out;
	-o-transition: 0.3s ease-in-out;
	&:hover {
		color: black;
		background-color: #7b7777;
		filter: grayscale(1);
		-webkit-filter: grayscale(1);
	}
	& > a {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: flex-start;
		align-items: flex-start;
		width: 65vw;
	}

	& > a > section > p {
		//text-wrap: wrap;
	}

	& > a > section {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: flex-start;
		justify-content: center;
		align-items: flex-start;
		width: 40vw;
	}
`;

export default function Page() {
	return (
		<main>
			<header className={classes.headerCard}>Que desea?</header>
			<div className={styles.contenedor}>
				<Lista>
					<ItemLista>
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
					</ItemLista>
					<ItemLista>
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
					</ItemLista>
					<ItemLista>
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
					</ItemLista>
					<ItemLista>
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
					</ItemLista>
				</Lista>
			</div>
		</main>
	);
}
