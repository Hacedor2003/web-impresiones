import { click } from '@/app/lib/definitions';

export default function HandleClickAdd({ clicks, setclicks, setDesabilitado }: click) {
	const index = clicks - 1;
	const libro = document.querySelector('.iuflLG');
	const hojas = libro?.getElementsByTagName('article');

	if (index < hojas?.length) {
		hojas[index].classList.add('estyles_abrir__Z13ze');
	}
	if (index + 1 == hojas?.length) {
		setDesabilitado(true);
	}
	setclicks((i: number) => i + 1);
}
