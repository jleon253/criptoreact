import React from 'react'
import PropTypes from 'prop-types';

const Cotizacion = ({cotizacion}) => {
  if(Object.keys(cotizacion).length === 0) return null;
	return (
		<div className='card'>
      <div className='card-header font-weight-bold'>
        {cotizacion.TOSYMBOL} -> {cotizacion.FROMSYMBOL}
      </div>
			<div className='card-body'>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h5>
              Precio:
            </h5>
            <span className="badge badge-warning badge-pill">{cotizacion.PRICE}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Máximo hoy:
            <span className="badge badge-warning badge-pill">{cotizacion.HIGHDAY}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Mínimo hoy:
            <span className="badge badge-warning badge-pill">{cotizacion.LOWDAY}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Valoración últimas 24h:
            <span className="badge badge-warning badge-pill">{cotizacion.CHANGEPCT24HOUR}</span>
          </li>
        </ul>
			</div>
      <div className='card-footer text-muted'>
        Última actualización: {cotizacion.LASTUPDATE}
      </div>
		</div>
	)
}

Cotizacion.propTypes = {
  cotizacion: PropTypes.object.isRequired
};

export default Cotizacion
