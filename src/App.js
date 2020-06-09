import React, { Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Navbar from './components/Navbar/Navbar'
import Formulario from './components/Formulario/Formulario'
import Cotizacion from './components/Cotizacion/Cotizacion'
import Spinner from './components/Spinner/Spinner'

import banner from './assets/banner-1.png'
import Axios from 'axios';

function App() {
	const Banner = styled.img`
		width: 200px;
		display: block;
		margin: 0px auto;
	`
	const Titulo = styled.h2`
		color: white;
		text-align: center;
		text-transform: uppercase;
	`
	const Subtitulo = styled.small`
		color: white;
		text-align: center;
	`
	const Separator = styled.hr`
		border-top: 1px solid #3e4760;
		margin: 0px auto;
	`

  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if(moneda === '' || cripto === '') return;
    const cotizar = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      const respuesta = await Axios.get(url);
      setCargando(false);
      // Esta es la forma de acceder a los datos de respuesta por la API
      setCotizacion(respuesta.data.DISPLAY[cripto][moneda]);
    };
    cotizar();
  }, [moneda, cripto]);

  let resultado = cargando ? (<Spinner />)  : (<Cotizacion cotizacion={cotizacion} />);

	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<div className='row mb-3'>
						<div className='col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center align-items-center'>
							<Banner src={banner} alt='banner' />
							<div className='d-flex flex-column'>
								<Titulo>Cotiza criptomonedas al instante</Titulo>
								<Subtitulo className="text-warning">Usando las 10 más populares</Subtitulo>
							</div>
						</div>
				</div>
				<Separator />
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-6 p-3'>
            <Formulario
              setMoneda={setMoneda}
              setCripto={setCripto}
              setCargando={setCargando}
            />
					</div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 p-3'>
            {resultado}
          </div>
				</div>
			</div>
		</Fragment>
	)
}

export default App
