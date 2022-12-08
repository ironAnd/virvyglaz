import { Header } from '../common/header';
import { Footer } from '../common/footer';

import styles from './styles.module.scss';

export const Main = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
