import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Main } from '../../layouts/main';
import { Button } from '../../common/button';
import GodsLogo from '../../img/gods.png';
import Main1 from '../../img/main1.png';
import Main2 from '../../img/main2.png';
import Main3 from '../../img/main3.png';

import C1 from '../../img/c1.png';
import C2 from '../../img/c2.png';
import C3 from '../../img/c3.png';
import C4 from '../../img/c4.png';
import C5 from '../../img/c5.png';
import C6 from '../../img/c6.png';

import styles from './styles.module.scss';
import { Box } from '../../common/box';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Box>
        <div className={styles.imageContentWrapper}>
          <img className={styles.image25} src={Main1} alt="Main1" />
          <img className={styles.image50} src={Main2} alt="Main2" />
          <img className={styles.image25} src={Main3} alt="Main3" />
          {/* <div className={styles.btnWrapper}>
            <Button
              text="Більше про нашу історію"
              onClick={() => navigate('/history')}
            />
          </div> */}
        </div>
      </Box>

      <Box className={styles.testContent}>
        <div className={styles.header}>
          Дізнайся хто ти з Богів зі слов’янської міфології!
        </div>
        <img src={GodsLogo} alt="Gods" />
        <Button text="Пройти тест" onClick={() => navigate('/test')} />
      </Box>

      <Box className={styles.giftsContent}>
        <div className={styles.header}>Обери тематичний подарунок!</div>
        <Carousel
          className={styles.carousel}
          centerSlidePercentage={80}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          centerMode
        >
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C1} alt="c1" />
          </div>
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C2} alt="c2" />
          </div>
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C3} alt="c3" />
          </div>
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C4} alt="c5" />
          </div>
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C5} alt="c5" />
          </div>
          <div className={styles.carouselImageWrapper}>
            <img className={styles.carouselImage} src={C6} alt="c6" />
          </div>
        </Carousel>
      </Box>
    </Main>
  );
};
