import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

const NAV_ITEMS = [
  { to: '/', translationKey: 'nav.home', end: true },
  { to: '/info', translationKey: 'nav.info' },
  { to: '/faq', translationKey: 'nav.faq' },
  { to: '/gallery', translationKey: 'nav.gallery' },
  { to: '/contact', translationKey: 'nav.contact' },
];

export default function Navbar(): React.JSX.Element {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isPolish = i18n.language.startsWith('pl');

  const toggleLanguage = () => {
    void i18n.changeLanguage(isPolish ? 'en' : 'pl');
  };

  // Escape closes the mobile menu and hands focus back to the toggle
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-container">
        <Link to="/" className="brand-link" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-dot"></span>
          <span>Jaskinia Sołtysa</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          aria-label={t('nav.menuLabel')}
        >
          {NAV_ITEMS.map(({ to, translationKey, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(translationKey)}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="lang-button"
          aria-label={isPolish ? t('nav.switchToEnglish') : t('nav.switchToPolish')}
        >
          {isPolish ? 'EN' : 'PL'}
        </button>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
