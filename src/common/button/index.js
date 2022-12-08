import classNames from 'classnames';

import styles from './styles.module.scss';

export const Button = ({ className, text, onClick }) => {
  return (
    <div className={classNames(className, styles.btn)} onClick={onClick}>
      {text}
    </div>
  );
};
