import React from 'react';
import { UiTarjeta } from './UiTarjeta';

export const Acerca = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<main>
				<h2>Sobre nosotros:</h2>
				<p>Impresiones Cary se dedica a facilitarle a la hora de imprimir sus documentos , siemplemente pase por nuestro local o reserve usando esta plataforma y posteriormente recpjer su documento en nuestras oficinas</p>
			</main>
		</UiTarjeta>
	);
};
