import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '../../img/logo.svg';
import { Box } from '../box';

import styles from './styles.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const onHeaderClick = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <Box className={styles.header}>
      <div className={styles.logoWrapper} onClick={onHeaderClick}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div>
          <div>Слов’янська</div>
          <div>Міфологія</div>
        </div>
      </div>
      <ul className={styles.menu}>
        <li onClick={() => navigate('/')}>Головна</li>
        <li onClick={() => navigate('/history')}>Історія</li>
        <li onClick={() => navigate('/test')}>Хто ти?</li>
        <li onClick={() => navigate('/gifts')}>Подарунки</li>
      </ul>
    </Box>
  );
};
