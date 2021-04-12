import React from 'react';
import './styles/plansLanding.css';

function plansLanding() {
    return (
        <React.Fragment>
        <section className="bitcoin-img-container">
            <h2>Conócelo hoy.</h2>    
        </section>
        <section id="plans" className="main-pad-container">
            <div className="plans-title">
                <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
            </div>
            <section className="container-slider">
                <article className="plans-container-bar">
                    <p className="container-slider-slide" id="card1">Recomendado</p>
                    <div className="info-container">
                        <h3 className="plan-card-title">Pago anual</h3>
                        <p className="plan-card-price"><span>$</span> 99</p>
                        <p className="plan-card-saving">* Ahorras 129$ comprando el plan mensual*</p>
                        <button id="but1" className="plan-card-CTA">Escoge este <span></span></button>
                    </div>
                </article>

                <article className="plans-container-bar">
                    <p className="container-slider-slide" id="card2">Básico</p>
                    <div className="info-container">
                        <h3 className="plan-card-title">Pago mensual</h3>
                        <p className="plan-card-price"><span>$</span> 19</p>
                        <p className="plan-card-saving">* Ahorras 129$ comprando el plan mensual*</p>
                        <button id="but2" className="plan-card-CTA">Escoge este <span></span></button>
                    </div>
                </article>

                <article id="fondo"  className="plans-container-bar">
                    <p className="container-slider-slide" id="card3">Ilimitado</p>
                    <div  className="info-container2">
                        <h3 id="ultimo" className="plan-card-title">Pago anual</h3>
                        <p className="plan-card-price"><span>$</span> 199</p>
                        <p className="plan-card-saving">* Ahorras 129$ comprando el plan mensual*</p>
                        <button id="but3" className="plan-card-CTA">Escoge este <span></span></button>
                    </div>
                </article>
            </section>
        </section>
        </React.Fragment>
    )
}

export default plansLanding
