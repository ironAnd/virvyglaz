import { useState } from 'react';

import { Main } from '../../layouts/main';
import { Button } from '../../common/button';

import GodsLogo from '../../img/gods.png';

import styles from './styles.module.scss';
import { Box } from '../../common/box';
import { Question } from './question';
import { ResultModal } from './resultModal';

const questionsArray = [1, 2, 3, 4, 5, 6];

export const Test = () => {
  const [isOpen, setOpen] = useState(false);

  const questionsItems = questionsArray.map((item) => {
    return <Question key={item} number={item} />;
  });

  return (
    <Main>
      <Box className={styles.testContent}>
        <div className={styles.header}>
          Дізнайся хто ти з Богів зі слов’янської міфології!
        </div>

        <div className={styles.imgWrapper}>
          <img src={GodsLogo} alt="Gods" />
        </div>

        <div className={styles.questionsWrapper}>{questionsItems}</div>

        <Button text="До результату!" onClick={() => setOpen(true)} />

        <ResultModal open={isOpen} onClose={() => setOpen(false)} />
      </Box>
    </Main>
  );
};
