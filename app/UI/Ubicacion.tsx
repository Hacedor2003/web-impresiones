import React from 'react';
import { UiTarjeta } from './UiTarjeta';

export const Ubicacion = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<div>Ubicacion</div>
		</UiTarjeta>
	);
};