import React from 'react';
import styles from './Nav.module.css';
import { links } from './links.json';

type Link = {
  label: string;
  href: string;
};

const NavBar: React.FC<{}> = () => {
  return (
    <div className={styles.menu_bar}>
      <div className={styles['logo-container']}>
        <span>CodeSam</span>
      </div>
      <div className={styles['links-container']}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={styles['link']}>
              <a href={link.href}>{link.label}</a>
            </div>
          );
        })}
        <div className={styles['nav-toggle']}>
          <div className={styles['bar']}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;