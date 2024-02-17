import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
	background-color: white;
	position: absolute;
	right: 30vw;
	top: 20vh;
	height: 60vh;
	width: 40vw;
	z-index: 10;
	border: 5px solid black;
	display: flex;
	align-content: flex-start;
	color: black;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	overflow: overlay;

	@media screen and (max-width: 640px) {
		background-color: white;
		position: absolute;
		right: 11vw;
		top: 20vh;
		height: 60vh;
		width: 77vw;
		z-index: 10;
		border: 5px solid black;
		display: flex;
		align-content: flex-start;
		color: black;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		overflow: overlay;
	}
`;
export const UiTarjeta = ({ children, visible }: { children: ReactElement; visible: boolean }) => {
	return (
		<>
			<Contenedor style={{ display: visible ? 'flex' : 'none' }}>{children}</Contenedor>
		</>
	);
};
