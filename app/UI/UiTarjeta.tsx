import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
	background-color: #8c8c9f;
	position: absolute;
	right: 30vw;
	top: 20vh;
	height: 60vh;
	width: 40vw;
	z-index: 10;
	border: 5px solid #4f4f52;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
`;
export const UiTarjeta = ({ children, visible }: { children: ReactElement; visible: boolean }) => {
	return (
		<>
			<Contenedor style={{ display: visible ? 'flex' : 'none' }}>{children}</Contenedor>
		</>
	);
};
