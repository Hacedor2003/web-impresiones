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

const Logo = styled.article`
	position: absolute;
	top: 50vh;
	left: 50vw;
	z-index: 10;
`;
export const NavBar = ({ children }: { children: ReactNode }) => {
	const [visibleHorario, setVisibleHorario] = useState(false);
	const [visibleUbiacion, setVisibleUbicacion] = useState(false);
	const [visibleContactar, setVisibleContactar] = useState(false);
	const [visibleAcerca, setVisibleAcerca] = useState(false);
	return (
		<>
			<BarNav>
				<Logo>Logo</Logo>
				<ul>
					<li onClick={() => setVisibleHorario((prop) => !prop)}>Ver Horario</li>
					<li onClick={() => setVisibleUbicacion((prop) => !prop)}>Ver Ubicación</li>
					<li onClick={() => setVisibleContactar((prop) => !prop)}>Contactar</li>
					<li onClick={() => setVisibleAcerca((prop) => !prop)}>Acerca</li>
				</ul>
			</BarNav>
			<Acerca visible={visibleAcerca} />
			<Contactar visible={visibleContactar} />
			<Horario visible={visibleHorario} />
			<Ubicacion visible={visibleUbiacion} />
			{children}
		</>
	);
};
