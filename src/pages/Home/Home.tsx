import React from 'react';
import { useTranslation } from 'react-i18next';
import homeImage from '../../assets/pictures/photoHome.jpg';
import './Home.scss';

export default function Home(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="hero-layout">
        <div className="hero-content">
          <h1 className="card-title">{t('home.title')}</h1>
        </div>

        <div className="hero-image-wrapper">
          <img src={homeImage} alt="Jaskinia Sołtysa" />
        </div>
      </div>
    </div>
  );
}