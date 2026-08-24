import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Faq(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="content-card">
      <span className="card-badge">Pytania</span>
      <h1 className="card-title">{t('faq.title')}</h1>
      <p className="card-subtitle">{t('faq.description')}</p>
    </div>
  );
}