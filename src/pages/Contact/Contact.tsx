import React from 'react';
import { useTranslation } from 'react-i18next';
import contactImage from '../../assets/pictures/photoContact.webp';
import './Contact.scss';

export default function Contact(): React.JSX.Element {
  const { t } = useTranslation();

  const renderContactLink = (textKey: string, urlKey: string): React.JSX.Element => {
    const text = t(textKey);
    const url = t(urlKey);

    return url ? (
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    ) : (
      <span className="contact-link-placeholder">{text}</span>
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-layout">
        {/* Left side: 2 Descriptions */}
        <div className="contact-content">
          <p className="contact-description contact-links-description">
            {t('contact.desc1')}
            <br />
            {renderContactLink('contact.ulaLinkText', 'contact.ulaUrl')}
            <br />
            {renderContactLink('contact.krystianLinkText', 'contact.krystianUrl')}
          </p>
          {/* <p className="contact-description">{t('contact.desc2')}</p> */}
          {/* <p className="contact-description">{t('contact.desc3')}</p> */}
        </div>

        {/* Right side: Picture */}
        <div className="contact-image-wrapper">
          <img src={contactImage} alt="Kontakt" />
        </div>
      </div>
    </div>
  );
}