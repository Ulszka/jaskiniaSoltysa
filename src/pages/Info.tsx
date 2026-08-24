import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Info(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="content-card">
      <span className="card-badge">Harmonogram</span>
      <h1 className="card-title">{t('info.title')}</h1>
      <p className="card-subtitle">{t('info.description')}</p>
    </div>
  );
}