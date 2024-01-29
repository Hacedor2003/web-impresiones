import styled from 'styled-components';

import styles from '../estyles.module.css';

export const Book = styled.div`
	border-radius: 10px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
	background-color: whitesmoke;
	width: 80vw;
	height: 70vh;
	-webkit-box-shadow: 1px 1px 12px #000;
	box-shadow: 1px 1px 12px #000;
	-webkit-transform: preserve-3d;
	-ms-transform: preserve-3d;
	transform: preserve-3d;
	-webkit-perspective: 2000px;
	perspective: 2000px;
	color: #000;
`;

export const Cover = styled.div`
	border-radius: 10px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	background-color: lightgray;
	top: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	-webkit-transform-origin: 0;
	-ms-transform-origin: 0;
	transform-origin: 0;
	-webkit-box-shadow: 1px 1px 12px #000;
	box-shadow: 1px 1px 12px #000;
	z-index: 10;
`;

export const Hoja = styled.article<{ $bgColor?: string; $zIndex: number }>`
	top: 0;
	position: absolute;
	background-color: whitesmoke;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	cursor: pointer;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
	-webkit-transform-origin: 0;
	-ms-transform-origin: 0;
	transform-origin: 0;
	-webkit-box-shadow: 1px 1px 12px #000;
	box-shadow: 1px 1px 12px #000;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	z-index: ${(props) => (props.$zIndex ? props.$zIndex : 2)};
`;
import { useRouter } from 'next/navigation';

export const Main = ({ children }: { children: any }) => {
	const router = useRouter();

	return (
		<main className={styles.contenedor}>
			<button
				type='button'
				className={styles.Button}
				onClick={() => router.back()}>
				<svg
					height='16'
					width='16'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					viewBox='0 0 1024 1024'>
					<path d='M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z'></path>
				</svg>
				Atras
			</button>
			<aside>{children}</aside>
		</main>
	);
};
