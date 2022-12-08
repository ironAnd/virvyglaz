import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as FacebookLogo } from '../../img/facebook.svg';
import { ReactComponent as TwitterLogo } from '../../img/twitter.svg';
import { ReactComponent as TelegramLogo } from '../../img/telegram.svg';
import { ReactComponent as InstagramLogo } from '../../img/instagram.svg';

import styles from './styles.module.scss';
import { Box } from '../box';

export const Footer = () => {
  return (
    <Box className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.topLinksWrapper}>
          <ul className={styles.topMenu}>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Team</li>
          </ul>
          <ul className={styles.topSocial}>
            <li>
              <FacebookLogo />
            </li>
            <li>
              <TwitterLogo />
            </li>
            <li>
              <TelegramLogo />
            </li>
            <li>
              <InstagramLogo />
            </li>
          </ul>
        </div>
        <ul className={styles.bottomMenu}>
          <li>Privacy Policy</li>
          <li>Terms of User</li>
          <li>Sales and Refunds</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </Box>
  );
};
