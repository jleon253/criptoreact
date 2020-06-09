import React from 'react';
import PropTypes from 'prop-types';

const Alerta = ({mensaje}) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <b>{mensaje}</b>
    </div>
  );
};

Alerta.propTypes = {
  mensaje: PropTypes.string.isRequired
};

export default Alerta;