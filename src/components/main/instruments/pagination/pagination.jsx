import React from 'react';
import './pagination.scss';
import { NavLink } from 'react-router-dom';

function Pagination(props) {
  return (
    <section className="pagination">
      {props.currentPage > 1 && <div><NavLink to={`/instruments/${props.currentPage - 1}`} className='navlink'>назад</NavLink></div>}
      <div><NavLink to={'/instruments/1'} className='navlink' activeClassName='active'>1</NavLink></div>
      {props.currentPage > 4 && <div>...</div>}
      {props.currentPage - 2 > 1 && <div><NavLink to={`/instruments/${props.currentPage - 2}`} className='navlink' activeClassName='active'>{props.currentPage - 2}</NavLink></div>}
      {props.currentPage - 1 > 1 && <div><NavLink to={`/instruments/${props.currentPage - 1}`} className='navlink' activeClassName='active'>{props.currentPage - 1}</NavLink></div>}
      {props.currentPage > 1 && props.currentPage < props.lastPage && <div><NavLink to={`/instruments/${props.currentPage}`} className='navlink' activeClassName='active'>{props.currentPage}</NavLink></div>}
      {props.currentPage + 1 < props.lastPage && <div><NavLink to={`/instruments/${props.currentPage + 1}`} className='navlink' activeClassName='active'>{props.currentPage + 1}</NavLink></div>}
      {props.currentPage + 2 < props.lastPage && <div><NavLink to={`/instruments/${props.currentPage + 2}`} className='navlink' activeClassName='active'>{props.currentPage + 2}</NavLink></div>}
      {props.currentPage < props.lastPage - 3 && <div>...</div>}
      <div><NavLink to={`/instruments/${props.lastPage}`} className='navlink' activeClassName='active'>{props.lastPage}</NavLink></div>
      {props.currentPage < props.lastPage && <div><NavLink to={`/instruments/${props.currentPage + 1}`} className='navlink'>вперед</NavLink></div>}
    </section>
  );
}

export default Pagination;
