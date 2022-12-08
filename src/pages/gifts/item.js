import classNames from 'classnames';

import { Box } from '../../common/box';
import styles from './styles.module.scss';

export const Item = ({ image, header, text, isReverse }) => {
  return (
    <Box className={classNames(styles.item, { [styles.reverse]: isReverse })}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={header} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.itemHeader}>{header}</div>
        <div className={styles.itemText}>{text}</div>
      </div>
    </Box>
  );
};
