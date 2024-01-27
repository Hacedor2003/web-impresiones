import React from 'react';
import { Hoja } from '../../UI/Ui';

export const ListaDeHojas = () => {
	return (
		<>
			<Hoja $zIndex={5}>Hoja 1</Hoja>
			<Hoja $zIndex={4}>Hoja 2</Hoja>
			<Hoja $zIndex={3}>Hoja 3</Hoja>
		</>
	);
};
