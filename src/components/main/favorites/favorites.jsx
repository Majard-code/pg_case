import React from 'react';
import './favorites.scss';
import thousands from '../../../utils/thousands';
import numdec from '../../../utils/numdec';
import { NavLink } from 'react-router-dom';
import Redstar from '../instruments/imgs/redstar.svg';
import { connect } from 'react-redux';
import { removeInstrument } from '../../../store/reducers/favorites';


function Favorites(props) {
  return (
    <div className="favorites">
      <h1>Выбранные компании:</h1>
      <div className="favorites-table">
        {props.favorites.map(favorite => (
          <React.Fragment key={favorite.id}>
            <div className="divider"></div>
            {favorite.isSponsor && favorite.isSponsor === 1 ? <div className='redstar'><img src={Redstar} alt="Спонсор" /></div> : <div></div>}
            {favorite.image && <img src={favorite.image} alt={favorite.title} />}
            {!favorite.image && <div className='navlink'>{favorite.firstLettersOfName}</div>}
            <div className='name'>
              <div><NavLink to={`/instrument/${favorite.code}`} className='navlink' activeClassName='active'>{favorite.title}</NavLink></div>
              {favorite.isSponsor && favorite.isSponsor === 1 && <div><a target="_blank" rel="noopener noreferrer" href={favorite.url} className='link'>{favorite.shortUrl}</a></div>}
            </div>
            <div>{`${thousands(favorite.worksCount)} ${numdec(favorite.worksCount, ['проект', 'проекта', 'проектов'])}`}</div>
            <div>{`${thousands(favorite.partnersCount)} ${numdec(favorite.partnersCount, ['партнер', 'партнера', 'партнеров'])}`}</div>
            <div>{favorite.rate}</div>
            <div className="delBtn" onClick={() => props.removeInstrument(favorite.id)}>Удалить</div>
            {favorite.isSponsor && favorite.isSponsor === 1 ? <div className='sponsor-word'>СПОНСОР</div> : <div></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default connect(state => ({
  favorites: state.favorites.favorites,
}), {
  removeInstrument,
})(Favorites);
