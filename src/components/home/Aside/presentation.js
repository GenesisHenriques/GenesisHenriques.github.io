import React from 'react';
import './presentation.css';
import img from '../../../img/perfil.jpg'

function CardInfo() {
  return (
    <div className='presentation'>
      <img src={img} alt='Imagem de perfil de Gênesis Henriques' />
      <h5 className='name'> Gênesis Henriques </h5>
      <br />
      <p> Web developer </p>
      <p> Graphic designer </p>
      <br />
    </div>
  )
};

export default CardInfo;
