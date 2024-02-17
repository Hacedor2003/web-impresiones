import React from 'react';
import { UiTarjeta } from './UiTarjeta';

export const Ubicacion = ({ visible }: { visible: boolean }) => {
	return (
		<UiTarjeta visible={visible}>
			<div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d917.5520693728217!2d-82.36588968111963!3d23.089470281063548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scu!4v1706546202479!5m2!1ses-419!2scu'
					width='400'
					height='300'
					style={{ border: '0' }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
				<p>Direccion: Patrocinio 15 , Apartamento 2 entre 10 de Octubre y Poey </p>
			</div>
		</UiTarjeta>
	);
};
