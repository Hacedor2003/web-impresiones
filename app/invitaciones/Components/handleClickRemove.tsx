import { click } from '@/app/lib/definitions';

export default function handleClickRemove({ clicks, setclicks, setDesabilitado }: click) {
	if (clicks > 1) {
		const index = clicks - 2;
		const hojas = document.getElementsByTagName('article');

		if (hojas && index + 1 == hojas?.length) {
			setDesabilitado(false);
		}
		if (hojas && index < hojas?.length) {
			hojas[index].classList.remove('estyles_abrir__Z13ze');
		}
		setclicks((i: number) => i - 1);
	} else {
		const portada = document.getElementById('cover');

		portada?.classList.remove('estyles_abrir__Z13ze');
		setclicks(0);
	}
}
