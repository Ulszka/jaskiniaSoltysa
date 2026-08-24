import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="content-card">
      <span className="card-badge">Kontakt</span>
      <h1 className="card-title">{t('contact.title')}</h1>
      <p className="card-subtitle">{t('contact.description')}</p>
    </div>
  );
}