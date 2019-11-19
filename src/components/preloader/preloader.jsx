import React from 'react';
import './preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader">
        <img className="animated infinite rotateAnim slow10 constancy " src={require('./preloader.svg')} alt="CMS magazine"/>
    </div>
  );
};

export default Preloader;
