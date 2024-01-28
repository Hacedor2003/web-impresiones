import React from 'react'
import { UiTarjeta } from './UiTarjeta';

export const Horario = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<div>Horario</div>
		</UiTarjeta>
	);
};
