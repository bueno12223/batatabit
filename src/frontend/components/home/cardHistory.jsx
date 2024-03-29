import React from 'react';

import './styles/cardsHistory.css';

import { connect } from 'react-redux';

const CardHistory = (props) => {
  const { userPersonalData: { transacctions } } = props;
  if (transacctions.length === 0) {
    return (
      <h2 className='histoty_tableNotransaccions'>No hay ninguna Transacción relizada</h2>
    );
  }
  return (
    <>
      <h3 className='history_tableTitleUp'>Historial de Transacciones</h3>
      <table className='history_table'>
        <thead className='history_tableHead'>
          <th className='history_tableHeadName'>Para</th>
          <th className='history_tableHeadName out'>fecha</th>
          <th className='history_tableHeadName'>Tipo</th>
          <th className='history_tableHeadName last'>Cantidad</th>
        </thead>
        {transacctions.map((e) => (
          <tbody key={e.id} className='histoty_tableValueContainer'>
            <td className='histoty_tableValue first'>
              {e.to}
            </td>
            <td className='histoty_tableValue out'>{e.date}</td>
            <td className='histoty_tableValue'>{e.type}</td>
            <td className='histoty_tableValue last'>{e.ammount}</td>
          </tbody>
        ))}
      </table>

    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userPersonalData: {
      transacctions: state.userPersonalData.transacctions,
    } };
};
export default connect(mapStateToProps, null)(CardHistory);
