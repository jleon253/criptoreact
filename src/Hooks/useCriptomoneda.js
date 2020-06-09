import React, { Fragment, useState } from 'react'

const useCriptoMoneda = (label, stateInicial, opciones) => {
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
								<option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
									{opcion.CoinInfo.FullName}
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

export default useCriptoMoneda
