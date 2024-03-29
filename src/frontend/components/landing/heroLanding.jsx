import React from 'react';

import arrow from '../../images/landing/arrow.svg';
import './styles/heroLanding.css';

function headerLanding() {
  return (
    <section className='hero'>
      <div className='hero--title-container'>
        <div className='hero--title-batata'>
          <svg width='70' height='70' viewBox='0 0 41 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16.8906 20.3161C10.4673 22.314 0.0927203 20.2722 0.000572001 11.3743C-0.0915763 2.47631 10.9806 7.77674 10.9806 7.77674L16.8906 20.3161Z' fill='#FFC250' />
            <path d='M3.12363 6.38198C7.60659 5.61355 11.0113 11.5559 14.7782 17.7547C18.5452 23.9535 28.3542 26.4105 34.6218 21.1976C40.8893 15.9848 43.5419 6.85501 35.8464 1.40926C28.1509 -4.03649 23.3471 8.32707 16.7221 8.66692C10.0972 9.00677 10.0488 4.08063 3.12363 6.38198Z' fill='#FFD064' />
            <ellipse cx='35.1972' cy='11.6513' rx='1.96745' ry='1.96809' fill='#FFE19D' />
            <circle cx='31.4262' cy='13.1268' r='1.47559' fill='#FFE19D' />
            <circle cx='34.0495' cy='15.0949' r='1.14768' fill='#FFE19D' />
          </svg>
          <h2>Batatabit</h2>
        </div>
        <h1>La proxima revolución en el intercambio de criptomonedas</h1>
        <p className='hero--description'>Batatabit ayuda a maneter tus criptomonedas en un solo lugar</p>
        <a className='hero--button' href='#plans'>
          Conoce nuestros planes
          <span><img src={arrow} alt='' /></span>
        </a>
      </div>
    </section>
  );
}

export default headerLanding;
