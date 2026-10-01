import React from 'react';
import { useTranslation } from 'react-i18next';
import galleryImage from '../../assets/photoGallery.webp';
import './Gallery.scss';

export default function Gallery(): React.JSX.Element {
  const { t } = useTranslation();

  const renderDescriptionWithLink = (descriptionKey: string, urlKey: string): React.JSX.Element => {
    const description = t(descriptionKey);
    const separatorIndex = description.lastIndexOf(': ');

    if (separatorIndex === -1) {
      return <p className="gallery-description">{description}</p>;
    }

    const text = description.slice(0, separatorIndex + 2);
    const linkText = description.slice(separatorIndex + 2);
    const url = t(urlKey);

    return (
      <p className="gallery-description">
        {text}
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        ) : (
          <span className="gallery-link-placeholder">{linkText}</span>
        )}
      </p>
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-layout">
        {/* Left side: 3 Descriptions */}
        <div className="gallery-content">
          {renderDescriptionWithLink('gallery.desc1', 'gallery.desc1Url')}
          {renderDescriptionWithLink('gallery.desc2', 'gallery.desc2Url')}
          <p className="gallery-description">{t('gallery.desc3')}</p>
        </div>

        {/* Right side: Picture */}
        <div className="gallery-image-wrapper">
          <img src={galleryImage} alt="Galeria" />
        </div>
      </div>
    </div>
  );
}