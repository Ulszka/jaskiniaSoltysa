import React from 'react';
import { useTranslation } from 'react-i18next';
import './Info.scss';
import photo1 from '../../assets/pictures/photoCeremony.webp';
import photo2 from '../../assets/pictures/photoParty.webp';

export default function Info(): React.JSX.Element {
  const { t } = useTranslation();

  const renderMapLink = (translationKey: string, linkTextKey: string): React.JSX.Element => {
    const description = t(translationKey);
    const separatorIndex = description.indexOf(': ');

    if (separatorIndex === -1) {
      return <p>{description}</p>;
    }

    const label = description.slice(0, separatorIndex);
    const url = description.slice(separatorIndex + 2);

    return (
      <p>
        {label}:{' '}
        <a href={url} target="_blank" rel="noreferrer">
          {t(linkTextKey)}
        </a>
      </p>
    );
  };

  return (
    <div className="info-container">
      <div className="info-grid">
        {/* Column 1 */}
        <div className="info-column">
          <div className="column-text">
            <h2 className="column-title">{t('info.slub.title')}</h2>
            <div className="column-description">
              <p>{t('info.slub.desc1')}</p>
              <p>{t('info.slub.desc2')}</p>
              {renderMapLink('info.slub.desc3', 'info.slub.linkText')}
            </div>
          </div>
          <div className="column-image-wrapper">
            <img src={photo1} alt={t('info.slub.title')} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="info-column">
          <div className="column-text">
            <h2 className="column-title">{t('info.wesele.title')}</h2>
            <div className="column-description">
              <p>{t('info.wesele.desc1')}</p>
              <p>{t('info.wesele.desc2')}</p>
              {renderMapLink('info.wesele.desc3', 'info.wesele.linkText')}
            </div>
          </div>
          <div className="column-image-wrapper">
            <img src={photo2} alt={t('info.wesele.title')} />
          </div>
        </div>
      </div>
    </div>
  );
}