import { useRef } from 'react';
import classes from './index.module.css';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AnadirSolicitud({ onAnadirTextSolicitud, addSolicitudFileHandler, loading }: { onAnadirTextSolicitud: Function; addSolicitudFileHandler: Function; loading: boolean }) {
	const nombreClienteInputRef = useRef();
	const idInputRef = useRef();
	const numberInputRef = useRef();
	const descriptionInputRef = useRef();
	const archivoInputRef = useRef();

	function submitHandle(event: Event) {
		event.preventDefault();

		const enteredNombre = nombreClienteInputRef.current.value;
		const enteredId = idInputRef.current.value;
		const enteredNumber = numberInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const enteredArchivo = archivoInputRef.current;

		const solicitudData = {
			nombre: enteredNombre,
			id: enteredId,
			phone: enteredNumber,
			description: enteredDescription,
		};
		onAnadirTextSolicitud(solicitudData);
		addSolicitudFileHandler(enteredArchivo);
	}

	function handleFileChange(e: Event) {
		const file = e.target.files[0];
		archivoInputRef.current = file;
	}

	return (
		<Card>
			{!loading ? (
				<Card.Body>
					<form
						className={classes.form}
						onSubmit={submitHandle}>
						<div className={classes.control}>
							<label htmlFor='title'>Nombre:</label>
							<input
								type='text'
								required
								id='title'
								ref={nombreClienteInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='id'>Carnet de Identidad</label>
							<input
								type='text'
								required
								id='id'
								ref={idInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='number'>Telefono:</label>
							<input
								type='number'
								required
								id='number'
								ref={numberInputRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='documento'>Documento:</label>
							<input
								type='file'
								required
								id='documento'
								onChange={handleFileChange}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='description'>Descripción</label>
							<textarea
								id='description'
								rows={5}
								ref={descriptionInputRef}></textarea>
						</div>
						<div className={classes.actions}>
							<button type='submit'>Añadir Solicitud</button>
						</div>
					</form>
				</Card.Body>
			) : null}
		</Card>
	);
}

AnadirSolicitud.propTypes = {
	onAnadirTextSolicitud: PropTypes.func.isRequired,
	addSolicitudFileHandler: PropTypes.func.isRequired,
};
