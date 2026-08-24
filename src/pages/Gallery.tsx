import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="content-card">
      <span className="card-badge">Galeria</span>
      <h1 className="card-title">{t('gallery.title')}</h1>
      <p className="card-subtitle">{t('gallery.description')}</p>
    </div>
  );
}