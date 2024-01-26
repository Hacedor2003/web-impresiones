'use client';
import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AnadirSolicitud from './Components/AnadirSolicitud';

export default function Page() {
	const [loading, setLoading] = useState(false);
		const CHAT_ID = '-4120594353';
		const TOKEN_BOT_API = '6702487731:AAHKIgUr4xE-kzTF4DyrrsqjJQiC_d7b1Hw';


	const urlText = `https://api.telegram.org/bot${TOKEN_BOT_API}/sendMessage`;
	const urlFile = `https://api.telegram.org/bot${TOKEN_BOT_API}/sendDocument`;

	async function addSolicitudTextHandler(solicitudData: any) {
		setLoading(true);
		const TextoEnviar = 'Solicitud de Impresion:\nNombre del Cliente: ' + solicitudData.nombre + '\nCarnet de Identidad: ' + solicitudData.id + '\nTelefono: ' + solicitudData.phone + '\nComentarios: ' + solicitudData.description;
		return axios
			.post(urlText, {
				chat_id: CHAT_ID,
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
	async function addSolicitudFileHandler(solicitudData: any) {
		setLoading(true);
		const file = solicitudData;
		return axios
			.post(
				urlFile,
				{
					chat_id: CHAT_ID,
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
		<>
			<AnadirSolicitud
				onAnadirTextSolicitud={addSolicitudTextHandler}
				addSolicitudFileHandler={addSolicitudFileHandler}
				loading={loading}
			/>
		</>
	);
}
