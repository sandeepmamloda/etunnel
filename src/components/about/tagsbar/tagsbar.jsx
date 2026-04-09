import styles from './tagsbar.module.css';
import Image from 'next/image';

const logos = [
  { src: '/images/logos/coretrust.png',   alt: 'CoreTrust' },
  { src: '/images/logos/kica.png',        alt: 'KICA' },
  { src: '/images/logos/a3security.png',  alt: 'A3 Security' },
  { src: '/images/logos/lg.png',          alt: 'LG Electronics' },
  { src: '/images/logos/pps.png',         alt: 'Public Procurement Service' },
  { src: '/images/logos/daejeon.png',     alt: 'Daejeon University LINC' },
  { src: '/images/logos/koica.png',       alt: 'KOICA' },
];

const TagsBar = function () {
  return (
    <section className={styles['tagsbar-section']}>
      <div className={styles['tagsbar-wrapper']}>
        <div className={styles['tagsbar-track']}>
          {logos.map((logo) => (
            <div key={logo.alt} className={styles['tagsbar-item']}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill={true}
                className={styles['tagsbar-img']}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagsBar;