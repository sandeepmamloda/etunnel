import styles from "./navbar.module.css";
import Image from "next/image";
import Link from 'next/link';
const navLinks = [
  { label: 'Company',           href: '/company/overview' },
  { label: 'Core Technology',   href: '/coretech/p2n2' },
  { label: 'Biometric Products',href: '/products' },
  { label: 'Solutions',         href: '/solutions' },
  { label: 'News & Media',      href: '/news' },
];
const Navbar = function () {
  return (
    <>
      <header className={styles["header-section"]}>
        <div className={styles["header-section-wrapper"]}>
          <div className={styles["header-section-left"]}>
            <div className={styles["header-section-left-img"]}>
                <Image 
                    className={styles["img"]}
                    src="/images/logo.png"
                    fill={true}/>
            </div>
          </div>
          {/* CENTER — Nav Links */}
          <nav className={styles['header-section-center']}>
            <ul className={styles['nav-links']}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles['nav-link']}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles["header-section-right"]}></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;