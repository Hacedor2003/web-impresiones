import React from 'react';
import { UiTarjeta } from './UiTarjeta';

export const Acerca = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<div></div>
		</UiTarjeta>
	);
};
