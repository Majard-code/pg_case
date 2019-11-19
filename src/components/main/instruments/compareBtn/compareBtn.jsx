import React from 'react';
import './compareBtn.scss';
import Galka from '../imgs/galka.svg';
import { connect } from 'react-redux';
import { addInstrument, removeInstrument } from '../../../../store/reducers/favorites';

function CompareBtn(props) {
  if (props.favorites.favorites.find(x => x.id === props.instrument.id)) {
    return (
        <div className='removeBtn' onClick={() => props.removeInstrument(props.instrument.id)}><img src={Galka} alt="Галка" /></div>
    );
  } else {
    return (
        <div className='addBtn' onClick={() => props.addInstrument(props.instrument)}></div>
     );
  }
}

export default connect(state => ({
  favorites: state.favorites,
}), {
  addInstrument,
  removeInstrument,
})(CompareBtn);
