import React from 'react';
import './cityInfo.css';

function MoreInfo() {
  return (
    <div className='cityInfo'>
     <div>
       <p className='data'> Estado: </p>
       <p className='data'> Minas Gerais </p>
     </div>
     <div>
       <p className='data'> Cidade: </p>
       <p className='data'> Matias Barbosa </p>
     </div>
     <div>
       <p className='data'> Idade: </p>
       <p className='data'> 23 </p>
     </div>
    </div>
  )
};

export default MoreInfo;
