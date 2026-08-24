import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/informacje', label: t('nav.info') },
    { path: '/pytania', label: t('nav.faq') },
    { path: '/zdjecia', label: t('nav.photos') },
    { path: '/kontakt', label: t('nav.contact') },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-link">
          <span className="brand-dot" />
          <span>JASKINIA SOŁTYSA</span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}

          <button onClick={toggleLanguage} className="lang-button">
            {i18n.language === 'pl' ? '🇵🇱 PL' : '🇬🇧 EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}