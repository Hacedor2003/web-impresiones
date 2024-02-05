'use client';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Acerca } from './Acerca';
import { Contactar } from './Contactar';
import { Horario } from './Horario';
import { Ubicacion } from './Ubicacion';
import estilos from './estilos.module.css'

export const NavBar = ({ children }: { children: ReactNode }) => {
	const [visibleComponent, setVisibleComponent] = useState('');

	const handleComponentClick = (componentName: string) => {
		if (visibleComponent === componentName) {
			setVisibleComponent('');
		} else {
			setVisibleComponent(componentName);
		}
	};
	//<aside className={estilos.Logo}>Logo</aside>

	return (
		<>
			<div className={estilos.BarNav}>
				<ul>
					<li onClick={() => handleComponentClick('Horario')}>Ver Horario</li>
					<li onClick={() => handleComponentClick('Ubicacion')}>Ver Ubicación</li>
					<li onClick={() => handleComponentClick('Contactar')}>Contactar</li>
					<li onClick={() => handleComponentClick('Acerca')}>Acerca</li>
				</ul>
			</div>
			{visibleComponent === 'Acerca' && <Acerca visible={true} />}
			{visibleComponent === 'Contactar' && <Contactar visible={true} />}
			{visibleComponent === 'Horario' && <Horario visible={true} />}
			{visibleComponent === 'Ubicacion' && <Ubicacion visible={true} />}
			{children}
		</>
	);
};
