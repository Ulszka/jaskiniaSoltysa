import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/pictures/logo.jpg';
import './Navbar.scss';

export default function Navbar(): React.JSX.Element {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-link">
          <img src={logo} alt="Jaskinia Sołtysa" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.home', 'Strona Główna')}
          </NavLink>
          <NavLink to="/info" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.info', 'Informacje')}
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.faq', 'FAQ')}
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.menu', 'Menu')}
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.gallery', 'Galeria')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            {t('nav.contact', 'Kontakt')}
          </NavLink>

          <button onClick={toggleLanguage} className="lang-button">
            {i18n.language === 'pl' ? 'EN' : 'PL'}
          </button>
        </nav>
      </div>
    </header>
  );
}