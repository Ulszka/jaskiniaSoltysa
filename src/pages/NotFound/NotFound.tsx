import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NotFound.scss';

export default function NotFound(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">{t('notFound.title')}</h1>
      <p className="not-found-description">{t('notFound.description')}</p>
      <Link to="/" className="not-found-link">
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}
