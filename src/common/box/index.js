import classNames from 'classnames';
import styles from './styles.module.scss';

export const Box = ({ className, children }) => {
  return <div className={classNames(className, styles.box)}>{children}</div>;
};
