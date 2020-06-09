import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, opciones) => {
	// State de custom hook
	const [state, updateState] = useState(stateInicial)

	const Seleccionar = () => {
		return (
			<Fragment>
				<div className='form-group'>
					<label className='text-light'>{label}</label>
					<select
						className='form-control'
						onChange={(e) => updateState(e.target.value)}
						value={state}
					>
						<option value=''>-- Elige aquí --</option>
						{opciones.map((opcion) => {
							return (
								<option key={opcion.codigo} value={opcion.codigo}>
									{opcion.nombre}
								</option>
							)
						})}
					</select>
				</div>
			</Fragment>
		)
	}

	// Retorna state, interfaz y funcion para manipular state
	return [state, Seleccionar, updateState]
}

export default useMoneda
