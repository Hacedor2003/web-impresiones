import axios from "axios";

export default async function addSolicitudTextHandler(solicitudData: any, setLoading:Function) {
	const CHAT_ID = '-4120594353';
	const TOKEN_BOT_API = '6702487731:AAHKIgUr4xE-kzTF4DyrrsqjJQiC_d7b1Hw';

	const urlText = `https://api.telegram.org/bot${TOKEN_BOT_API}/sendMessage`;

	setLoading(true);
	const TextoEnviar = 'Solicitud de Impresion:\nNombre del Cliente: ' + solicitudData.nombre + '\nCarnet de Identidad: ' + solicitudData.id + '\nTelefono: ' + solicitudData.phone + '\nComentarios: ' + solicitudData.description;
	return axios
		.post(urlText, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: TextoEnviar,
		})
		.then((response) => {
			setLoading(false);
		})
		.catch((error) => {
			setLoading(true), console.log(error);
		});
}
