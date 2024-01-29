'use client';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Acerca } from './Acerca';
import { Contactar } from './Contactar';
import { Horario } from './Horario';
import { Ubicacion } from './Ubicacion';

const BarNav = styled.div`
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-items: center;
	background-color: white;
	color: black;
	padding: 2vh;
	& > ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: center;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		border: 2px solid black;
		border-radius: 0px 0px 20px 20px;
		background-color: black;
		color: white;
		& > li {
			padding: 10px;
			padding-left: 5vw;
			padding-right: 5vw;
			transition: 0.5s ease;
			&:hover {
				background-color: white;
				color: black;
				border-radius: 0px 0px 20px 20px;
			}
		}
	}
`;

const Logo = styled.aside`
	position: absolute;
	top: 50vh;
	left: 50vw;
	z-index: 10;
`;

export const NavBar = ({ children }: { children: ReactNode }) => {
	const [visibleComponent, setVisibleComponent] = useState('');

	const handleComponentClick = (componentName: string) => {
		if (visibleComponent === componentName) {
			setVisibleComponent('');
		} else {
			setVisibleComponent(componentName);
		}
	};

	return (
		<>
			<BarNav>
				<Logo>Logo</Logo>
				<ul>
					<li onClick={() => handleComponentClick('Horario')}>Ver Horario</li>
					<li onClick={() => handleComponentClick('Ubicacion')}>Ver Ubicación</li>
					<li onClick={() => handleComponentClick('Contactar')}>Contactar</li>
					<li onClick={() => handleComponentClick('Acerca')}>Acerca</li>
				</ul>
			</BarNav>
			{visibleComponent === 'Acerca' && <Acerca visible={true} />}
			{visibleComponent === 'Contactar' && <Contactar visible={true} />}
			{visibleComponent === 'Horario' && <Horario visible={true} />}
			{visibleComponent === 'Ubicacion' && <Ubicacion visible={true} />}
			{children}
		</>
	);
};
