'use client';

import { useState } from 'react';
import classes from '../Styles/index.module.css';
import { Card } from 'react-bootstrap';
import addSolicitudFileHandler from './addSolicitudHandler';
import addSolicitudTextHandler from './addSolicitudTextHandler';
import { Main } from '../Ui/Main';

export default function AnadirSolicitud() {
	const [nombre, setNombre] = useState('');
	const [id, setId] = useState('');
	const [number, setNumber] = useState('');
	const [description, setDescription] = useState('');
	const [archivo, setArchivo] = useState(null);
	const [loading, setLoading] = useState(false);

	function submitHandle(event: any) {
		event.preventDefault();

		const solicitudData = {
			nombre,
			id,
			phone: number,
			description,
		};
		addSolicitudTextHandler(solicitudData, setLoading);
		addSolicitudFileHandler(archivo, setLoading);
	}

	function handleFileChange(e: any) {
		const file = e.target.files[0];
		setArchivo(file);
	}

	return (
		<Main>
			<Card>
				{!loading ? (
					<Card.Body>
						<form
							className={classes.form}
							onSubmit={submitHandle}>
							<div className={classes.control}>
								<label htmlFor='title'>Nombre:{nombre !== '' ? '✅' : ''}</label>
								{nombre === '' ? (
									<input
										type='text'
										required
										id='title'
										value={nombre}
										onChange={(e) => setNombre(e.target.value)}
									/>
								) : (
									''
								)}
							</div>
							<div className={classes.control}>
								<label htmlFor='id'>Carnet de Identidad {id !== '' ? '✅' : ''}</label>
								{id === '' ? (
									<input
										type='text'
										required
										id='id'
										value={id}
										onChange={(e) => setId(e.target.value)}
									/>
								) : (
									''
								)}
							</div>
							<div className={classes.control}>
								<label htmlFor='number'>Telefono: {number !== '' ? '✅' : ''}</label>
								{number === '' ? (
									<input
										type='text'
										required
										id='number'
										value={number}
										onChange={(e) => setNumber(e.target.value)}
									/>
								) : (
									''
								)}
							</div>
							<div className={classes.control}>
								<label htmlFor='documento'>Documento: {archivo !== null ? '✅' : ''}</label>
								{archivo === null ? (
									<input
										type='file'
										required
										id='documento'
										onChange={handleFileChange}
									/>
								) : (
									''
								)}
							</div>
							<div className={classes.control}>
								<label htmlFor='description'>Descripción {description !== '' ? '✅' : ''}</label>
								{description === '' ? (
									<textarea
										id='description'
										rows={5}
										value={description}
										onChange={(e) => setDescription(e.target.value)}></textarea>
								) : (
									''
								)}
							</div>
							<div className={classes.actions}>
								<button type='submit'>Añadir Solicitud</button>
							</div>
						</form>
					</Card.Body>
				) : null}
			</Card>
		</Main>
	);
}
