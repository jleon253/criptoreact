import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types';

import useMoneda from '../../Hooks/useMoneda'
import useCriptoMoneda from '../../Hooks/useCriptomoneda'

import Alerta from '../Alerta/Alerta'

const Formulario = ({setMoneda, setCripto, setCargando}) => {
	// State: Lista de criptomonedas
	const [listaCripto, setListaCripto] = useState([])

	useEffect(() => {
		const consultarAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
			const respuesta = await Axios.get(url)
			setListaCripto(respuesta.data.Data)
		}
		consultarAPI()
	}, [])

	const MONEDAS = [
		{ codigo: 'COP', nombre: 'Peso Colombiano' },
		{ codigo: 'USD', nombre: 'Dolar Americano' },
		{ codigo: 'EUR', nombre: 'Euro' },
	]
	// Utilizar useMoneda (array destructuring)
	const [stateMoneda, SelectMoneda] = useMoneda('Elige una moneda', '', MONEDAS)
	// Utilizar useCriptomoneda (array destructuring)
  const [stateCriptomoneda, SelectCriptoMoneda] = useCriptoMoneda('Elige una criptomoneda', '', listaCripto)
  // State para error
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(stateMoneda === '' || stateCriptomoneda === '') {
      setError(true);
      return;
    }
    setCargando(true);
    setTimeout(() => {
      setError(false);
      setMoneda(stateMoneda);
      setCripto(stateCriptomoneda);
    }, 500);
  };

	return (
    <form onSubmit={handleSubmit}>
      {error ? <Alerta mensaje="Todos los campos son requeridos"/> : null}
			<SelectMoneda />
			<SelectCriptoMoneda />
			<button
				type='submit'
				className='btn btn-warning btn-lg btn-block text-uppercase font-weight-bold mt-5'
			>
				Cotiza ahora!!
			</button>
		</form>
	)
}

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCripto: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired
};

export default Formulario
