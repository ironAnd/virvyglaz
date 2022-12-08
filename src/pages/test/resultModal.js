import React from 'react';
import Modal from 'react-modal';

import { Button } from '../../common/button';

import ResultImage1 from '../../img/resultImage1.png';
import ResultImage2 from '../../img/resultImage2.png';

import styles from './styles.module.scss';

Modal.setAppElement('#root');

const result = {
  0: {
    heading: 'Ти - Бог Перун!',
    text: `Перу́н — бог слов'ян і балтів, верховний бог у Київській Русі IX—X ст., володар неба, повелитель грому і блискавки, бог родючості, пізніше покровитель князів та їхніх дружинників, військової справи. Верховним богом усієї Київської Русі Перун став за князів Ігоря, Святослава і Володимира Великого, витіснивши з цього статусу місцевих божеств різних регіонів.`,
    image: ResultImage1,
  },
  1: {
    heading: 'Ти - Бог Дажбог!',
    text: `Дажбог (Дажбо, Даждьбог, Богдаждь) — бог світла і Сонця, син могутнього бога вогню Сварога; подавач усякого добра, опікун людської долі та достатку; бог, який дає білий день, щастя та любов. Зі сходом Сонця у предків з давніх давен асоціювалося його відродження, а тому Сварог є божество-батько, який дає життя Сонцю Дажбогу.`,
    image: ResultImage2,
  },
};

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    background: 'transparent',
    border: 0,
    top: '20px',
    left: 0,
    right: '100',
    bottom: 'auto',
    padding: 0,
  },
};

export const ResultModal = ({ open, onClose }) => {
  const { heading, text, image } = result[Math.round(Math.random())];

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeading}>{heading}</div>
        <img className={styles.modalImg} src={image} alt={heading} />
        <div className={styles.modalText}>{text}</div>

        <Button
          className={styles.modalCloseBtn}
          text="Закрити"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
};
