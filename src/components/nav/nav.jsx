import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from './logo/logo';
import { connect } from 'react-redux';

import Star from './imgs/star.svg'
import Loupe from './imgs/loupe.svg'
import Indoor from './imgs/indoor.svg'

function Nav(props) {
  console.log(props.favorites.favorites);
  return (
    <nav className='nav'>
      <Logo />
      <div className='spacer'></div>
      <div className='up-menu'>
        <div>
          <NavLink to='/magazine' className='navlink' activeClassName='active'>ЖУРНАЛ</NavLink>
        </div>
        <div>
          <NavLink to='/agencies' className='navlink' activeClassName='active'>АГЕНТСТВА</NavLink>
        </div>
        <div>
          <NavLink to={`/instruments/${props.page}`} className='navlink' activeClassName='active'>ИНСТРУМЕНТЫ</NavLink>
        </div>
      </div>
      <div className='spacer'></div>
      <div className="bottom-menu">
        <img src={Star} alt="Избраное" />
        <div>
          <NavLink to='/favorites' className='navlink' activeClassName='active'>Избранное</NavLink>
        </div>
        {props.favorites.numOfFavorites > 0 && props.favorites.numOfFavorites < 10 && <div className="red-circle">{props.favorites.numOfFavorites}</div>}
        {props.favorites.numOfFavorites > 9 && <div className="red-circle">9+</div>}
        {props.favorites.numOfFavorites < 1 && <div className='empty-place'></div>}
        <img src={Loupe} alt="Избраное" />
        <div>
          <NavLink to='/search' className='navlink' activeClassName='active'>Поиск</NavLink>
        </div>
        <div></div>
        <img src={Indoor} alt="Избраное" />
        <div>
          <NavLink to='/account' className='navlink' activeClassName='active'>Кабинет агентства</NavLink>
        </div>
        <div></div>



      </div>
    </nav>
  );
}

export default connect(state => ({
  page: state.instruments.page,
  favorites: state.favorites,
}))(Nav);
