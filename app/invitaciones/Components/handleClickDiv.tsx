export default function HandleClickDiv({ clicks, setclicks }: { clicks: number; setclicks: Function }) {
	const portada = document.getElementById('cover');
	if (clicks === 0) {
		portada?.classList.add('estyles_abrir__Z13ze');
		setclicks(1);
	} else if (clicks === 1) {
		portada?.classList.remove('estyles_abrir__Z13ze');
		setclicks(0);
	}
}
