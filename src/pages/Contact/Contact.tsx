import React from 'react';
import { useTranslation } from 'react-i18next';
import contactImage from '../../assets/pictures/photoContact.jpg';
import './Contact.scss';

export default function Contact(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="contact-layout">
        {/* Left side: 2 Descriptions */}
        <div className="contact-content">
          <p className="contact-description">{t('contact.desc1')}</p>
          <p className="contact-description">{t('contact.desc2')}</p>
        </div>

        {/* Right side: Picture */}
        <div className="contact-image-wrapper">
          <img src={contactImage} alt="Kontakt" />
        </div>
      </div>
    </div>
  );
}