import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/pictures/logo.png';
import './Navbar.scss';

export default function Navbar(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-link" onClick={closeMenu}>
          <img src={logo} alt="Jaskinia Sołtysa" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.home', 'Strona Główna')}
          </NavLink>
          <NavLink to="/info" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.info', 'Informacje')}
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.faq', 'FAQ')}
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.menu', 'Menu')}
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.gallery', 'Galeria')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
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