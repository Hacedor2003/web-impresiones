import { click } from '@/app/lib/definitions';

export default function handleClickRemove({ clicks, setclicks, setDesabilitado }: click) {
	if (clicks > 1) {
		const index = clicks - 2;
		const libro = document.querySelector('.iuflLG');
		const hojas = libro?.getElementsByTagName('article');

		if (hojas && index + 1 == hojas?.length) {
			setDesabilitado(false);
		}
		if (hojas && index < hojas?.length) {
			hojas[index].classList.remove('estyles_abrir__Z13ze');
		}
		setclicks((i: number) => i - 1);
	} else {
		const portada = document.querySelector('.POOQi');

		portada?.classList.remove('estyles_abrir__Z13ze');
		setclicks(0);
	}
}
