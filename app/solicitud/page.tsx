'use client';
import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AnadirSolicitud from './Components/AnadirSolicitud';

export default function Page() {
	const [loading, setLoading] = useState(false);

	const urlText = `https://api.telegram.org/bot${process.env.TOKEN_BOT_API}/sendMessage`;
	const urlFile = `https://api.telegram.org/bot${process.env.TOKEN_BOT_API}/sendDocument`;

	async function addSolicitudTextHandler(solicitudData) {
		setLoading(true);
		const TextoEnviar = 'Solicitud de Impresion:\nNombre del Cliente: ' + solicitudData.nombre + '\nCarnet de Identidad: ' + solicitudData.id + '\nTelefono: ' + solicitudData.phone + '\nComentarios: ' + solicitudData.description;
		return axios
			.post(urlText, {
				chat_id: process.env.CHAT_ID,
				parse_mode: 'html',
				text: TextoEnviar,
			})
			.then((response) => {
				console.log(response);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(true), console.log(error);
			});
	}
	async function addSolicitudFileHandler(solicitudData) {
		setLoading(true);
		const file = solicitudData;
		return axios
			.post(
				urlFile,
				{
					chat_id: process.env.CHAT_ID,
					document: file,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			.then((response) => {
				setLoading(false);
				console.log(response);
			})
			.catch((error) => {
				console.log(error), setLoading(false);
			});
	}

	//<MainNavigation type={'solicitud'} />
	return (
		<AnadirSolicitud
			onAnadirTextSolicitud={addSolicitudTextHandler}
			addSolicitudFileHandler={addSolicitudFileHandler}
			loading={loading}
		/>
	);
}
