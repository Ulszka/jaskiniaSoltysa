import React from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.scss';

export default function Menu(): React.JSX.Element {
  const { t } = useTranslation();
  const renderMenuItems = (key: string): React.JSX.Element => {
    const items = t(key).split(';').map((item) => item.trim()).filter(Boolean);

    return (
      <ul className="menu-details">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    );
  };

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
              {renderMenuItems('menu.soup.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.mains.title')}</h2>
              {renderMenuItems('menu.mains.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper1.title')}</h2>
              {renderMenuItems('menu.supper1.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper2.title')}</h2>
              {renderMenuItems('menu.supper2.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.supper3.title')}</h2>
              {renderMenuItems('menu.supper3.items')}
            </div>
          </div>

          {/* Column 2: Snacks, Desserts & Drinks */}
          <div className="menu-column">
            <h2 className="menu-column-title">{t('menu.column2Title')}</h2>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.snacks.title')}</h2>
              {renderMenuItems('menu.snacks.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.desserts.title')}</h2>
              {renderMenuItems('menu.desserts.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.nonAlkDrinks.title')}</h2>
              {renderMenuItems('menu.nonAlkDrinks.items')}
            </div>

            <div className="menu-item">
              <h2 className="menu-category">{t('menu.alkDrinks.title')}</h2>
              {renderMenuItems('menu.alkDrinks.items')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}