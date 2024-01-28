import axios from 'axios';

export default async function addSolicitudFileHandler(solicitudData: any, setLoading: Function) {
	const CHAT_ID = '-4120594353';
	const TOKEN_BOT_API = '6702487731:AAHKIgUr4xE-kzTF4DyrrsqjJQiC_d7b1Hw';

	const urlFile = `https://api.telegram.org/bot${TOKEN_BOT_API}/sendDocument`;

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
		})
		.catch((error) => {
			console.log(error), setLoading(false);
		});
}
