import React from 'react'
import { UiTarjeta } from './UiTarjeta';

export const Contactar = ({visible}:{visible:boolean}) => {
  return (
		<UiTarjeta visible={visible}>
			<div>Contactar</div>
		</UiTarjeta>
  );
}
