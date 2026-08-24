import React from 'react';
import { useTranslation } from 'react-i18next';
import galleryImage from '../../assets/pictures/photoGallery.jpg';
import './Gallery.scss';

export default function Gallery(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="gallery-container">
      <div className="gallery-layout">
        {/* Left side: 3 Descriptions */}
        <div className="gallery-content">
          <p className="gallery-description">{t('gallery.desc1')}</p>
          <p className="gallery-description">{t('gallery.desc2')}</p>
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