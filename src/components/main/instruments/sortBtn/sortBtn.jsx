import React from 'react';
import './sortBtn.scss';
import RedTriangle from '../imgs/redtriangle.svg';

function SortBtn(props) {
  switch(props.name){
    case 'ПРОЕКТЫ':
      if (props.sort === 'works_count'){
        if (props.sortDirection === 'desc'){
          return (
            <div className="sortBtn">
              <div className="red" onClick={() => props.setSortAndSortDirection('works_count', 'asc')}>{props.name}</div>
              <img className='red-triangle down' src={RedTriangle} alt="Сортировка"/>
            </div>
          );
        } else {
          return (
            <div className="sortBtn">
              <div className="red" onClick={() => props.setSortAndSortDirection(null, null)}>{props.name}</div>
              <img className='red-triangle' src={RedTriangle} alt="Сортировка"/>
            </div>
          );
        }        
      } else {
        return (
          <div className="sortBtn names">
            <div onClick={() => props.setSortAndSortDirection('works_count', 'desc')}>{props.name}</div>
          </div>
        );
      }
      case 'ПАРТНЕРЫ':
          if (props.sort === 'partners_count'){
            if (props.sortDirection === 'desc'){
              return (
                <div className="sortBtn">
                  <div className="red" onClick={() => props.setSortAndSortDirection('partners_count', 'asc')}>{props.name}</div>
                  <img className='red-triangle down' src={RedTriangle} alt="Сортировка"/>
                </div>
              );
            } else {
              return (
                <div className="sortBtn">
                  <div className="red" onClick={() => props.setSortAndSortDirection(null, null)}>{props.name}</div>
                  <img className='red-triangle' src={RedTriangle} alt="Сортировка"/>
                </div>
              );
            }        
          } else {
            return (
              <div className="sortBtn names">
                <div onClick={() => props.setSortAndSortDirection('partners_count', 'desc')}>{props.name}</div>
              </div>
            );
          }
          case 'ОЦЕНКА ПОЛЬЗОВАТЕЛЕЙ':
              if (props.sort === 'rate'){
                if (props.sortDirection === 'desc'){
                  return (
                    <div className="sortBtn">
                      <div className="red" onClick={() => props.setSortAndSortDirection('rate', 'asc')}>{props.name}</div>
                      <img className='red-triangle down' src={RedTriangle} alt="Сортировка"/>
                    </div>
                  );
                } else {
                  return (
                    <div className="sortBtn">
                      <div className="red" onClick={() => props.setSortAndSortDirection(null, null)}>{props.name}</div>
                      <img className='red-triangle' src={RedTriangle} alt="Сортировка"/>
                    </div>
                  );
                }        
              } else {
                return (
                  <div className="sortBtn names">
                    <div onClick={() => props.setSortAndSortDirection('rate', 'desc')}>{props.name}</div>
                  </div>
                );
              }
      default:
          return (
            <div className="sortBtn names" onClick={() => props.setSortAndSortDirection(null, null)}>
              <div>{props.name}</div>
            </div>
          );
  }
}

export default SortBtn;
