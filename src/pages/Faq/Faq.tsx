import React from 'react';
import { useTranslation } from 'react-i18next';
import './Faq.scss';

export default function Faq(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-page-title">{t('faq.title')}</h1>

        <div className="faq-list">
          <div className="faq-item">
            <h2 className="faq-question">{t('faq.slub.question')}</h2>
            <p className="faq-answer">{t('faq.slub.answer')}</p>
          </div>

          <div className="faq-item">
            <h2 className="faq-question">{t('faq.wesele.question')}</h2>
            <p className="faq-answer">{t('faq.wesele.answer')}</p>
          </div>

          <div className="faq-item">
            <h2 className="faq-question">{t('faq.theme.question')}</h2>
            <p className="faq-answer">{t('faq.theme.answer')}</p>
          </div>

          <div className="faq-item">
            <h2 className="faq-question">{t('faq.parking.question')}</h2>
            <p className="faq-answer">{t('faq.parking.answer')}</p>
          </div>

          <div className="faq-item">
            <h2 className="faq-question">{t('faq.rsvp.question')}</h2>
            <p className="faq-answer">{t('faq.rsvp.answer')}</p>
          </div>

          <div className="faq-item">
            <h2 className="faq-question">{t('faq.accommodation.question')}</h2>
            <p className="faq-answer">{t('faq.accommodation.answer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}