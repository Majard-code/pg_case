import React, { useEffect } from 'react';
import './instruments.scss';
import { connect } from 'react-redux';
import { fetchInstruments, setSortAndSortDirection } from '../../../store/reducers/instruments';
import Preloader from '../../preloader/preloader';
import numdec from '../../../utils/numdec';
import thousands from '../../../utils/thousands';
import { NavLink, withRouter } from 'react-router-dom';
import Pagination from './pagination/pagination';
import { compose } from 'redux';
import Redstar from './imgs/redstar.svg'
import SortBtn from './sortBtn/sortBtn';
import CompareBtn from './compareBtn/compareBtn';

function Instruments(props) {
  console.log(props);
  const propsFetchInstruments = props.fetchInstruments
  const matchPage = props.match.params.pageNum ? props.match.params.pageNum : 1;
  const propsSort = props.sort;
  const propsSortDirection = props.sortDirection;
  useEffect(() => {
    propsFetchInstruments(matchPage, propsSort, propsSortDirection);
  }, [propsFetchInstruments, matchPage, propsSort, propsSortDirection]);
  if (!props.isReady) {
    return (
      <Preloader />
    );
  } else {
    return (
      <section className='instruments'>
        <div></div>
        <div></div>        
        <div className='names'>НАЗВАНИЕ</div>
        <SortBtn name='ПРОЕКТЫ' sort={props.sort} sortDirection={props.sortDirection} setSortAndSortDirection={props.setSortAndSortDirection} />
        <SortBtn name='ПАРТНЕРЫ' sort={props.sort} sortDirection={props.sortDirection} setSortAndSortDirection={props.setSortAndSortDirection} />
        <SortBtn name='ОЦЕНКА ПОЛЬЗОВАТЕЛЕЙ' sort={props.sort} sortDirection={props.sortDirection} setSortAndSortDirection={props.setSortAndSortDirection} />
        <div className='names'>СРАВНИТЬ</div>
        <div></div>
        {props.instruments.data.map(instrument => (
          <React.Fragment key={instrument.id}>
            <div className="divider"></div>
            {instrument.isSponsor && instrument.isSponsor === 1 ? <div className='redstar'><img src={Redstar} alt="Спонсор"/></div> : <div></div>}            
            {instrument.image && <img src={instrument.image} alt={instrument.title} />}
            {!instrument.image && <div className='navlink'>{instrument.firstLettersOfName}</div>}
            <div className='name'>
              <div><NavLink to={`/instrument/${instrument.code}`} className='navlink' activeClassName='active'>{instrument.title}</NavLink></div>
              {instrument.isSponsor && instrument.isSponsor === 1 && <div><a target="_blank" rel="noopener noreferrer" href={instrument.url} className='link'>{instrument.shortUrl}</a></div>}
            </div>
            <div>{`${thousands(instrument.worksCount)} ${numdec(instrument.worksCount, ['проект', 'проекта', 'проектов'])}`}</div>
            <div>{`${thousands(instrument.partnersCount)} ${numdec(instrument.partnersCount, ['партнер', 'партнера', 'партнеров'])}`}</div>
            <div>{instrument.rate}</div>
            <CompareBtn instrument={instrument}/>
            {instrument.isSponsor && instrument.isSponsor === 1 ? <div className='sponsor-word'>СПОНСОР</div> : <div></div>}
          </React.Fragment>
        ))}
        <Pagination currentPage={props.instruments.current_page} lastPage={props.instruments.last_page} sort={props.sort} sortDirection={props.sortDirection} />
      </section>
    );
  }
}

export default compose(
  withRouter,
  connect(state => ({
    isReady: state.instruments.isReady,
    instruments: state.instruments.data,
    sort: state.instruments.sort,
    sortDirection: state.instruments.sortDirection,
  }), {
    fetchInstruments,
    setSortAndSortDirection,
  }),
)(Instruments);
