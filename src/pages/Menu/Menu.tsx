import React from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.scss';

export default function Menu(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1 className="menu-page-title">{t('menu.title')}</h1>

        <div className="menu-columns">
          {/* Column 1: Served Meals */}
          <div className="menu-column">
            <h2 className="menu-column-title">{t('menu.column1Title')}</h2>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.soup.title')}</h2>
              <p className="menu-details">{t('menu.soup.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.mains.title')}</h2>
              <p className="menu-details">{t('menu.mains.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper1.title')}</h2>
              <p className="menu-details">{t('menu.supper1.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper2.title')}</h2>
              <p className="menu-details">{t('menu.supper2.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper3.title')}</h2>
              <p className="menu-details">{t('menu.supper3.items')}</p>
            </div>
          </div>

          {/* Column 2: Snacks, Desserts & Drinks */}
          <div className="menu-column">
            <h2 className="menu-column-title">{t('menu.column2Title')}</h2>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.snacks.title')}</h2>
              <p className="menu-details">{t('menu.snacks.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.desserts.title')}</h2>
              <p className="menu-details">{t('menu.desserts.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.nonAlkDrinks.title')}</h2>
              <p className="menu-details">{t('menu.nonAlkDrinks.items')}</p>
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.alkDrinks.title')}</h2>
              <p className="menu-details">{t('menu.alkDrinks.items')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}