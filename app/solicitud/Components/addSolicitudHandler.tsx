import axios from 'axios';

export default async function addSolicitudFileHandler(solicitudData: any, setLoading: Function) {
	const CHAT_ID = '-4120594353';
	const TOKEN_BOT_API = '6702487731:AAHKIgUr4xE-kzTF4DyrrsqjJQiC_d7b1Hw';

	const urlFile = `https://api.telegram.org/bot${TOKEN_BOT_API}/sendDocument`;

	setLoading(true);
	const formData = new FormData();
	formData.append('chat_id', CHAT_ID);
	formData.append('document', solicitudData);
	console.log('Data a enviar', solicitudData);

	try {
		const response = await axios.post(urlFile, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		setLoading(false);
		console.log('Esta es la respuesta del servidor', response);
	} catch (error) {
		console.log(error);
		setLoading(false);
	}
}
