import classNames from 'classnames';

import { Main } from '../../layouts/main';

import Main1 from '../../img/main1.png';
import Main2 from '../../img/main2.png';
import Main3 from '../../img/main3.png';
import HistoryImage1 from '../../img/historyImage1.png';
import HistoryImage2 from '../../img/historyImage2.png';
import HistoryImage3 from '../../img/historyImage3.png';

import styles from './styles.module.scss';
import { Box } from '../../common/box';

export const History = () => {
  return (
    <Main>
      <Box>
        <div className={styles.imageContentWrapper}>
          <img className={styles.image25} src={Main1} alt="Main1" />
          <img className={styles.image50} src={Main2} alt="Main2" />
          <img className={styles.image25} src={Main3} alt="Main3" />
        </div>
      </Box>

      <Box className={styles.roseContent}>
        <div className={styles.header}>Слов’янська міфологія</div>
        <div className={styles.text}>
          Реконструйована за даними з різних джерел система сприйняття
          навколишнього Всесвіту, сукупність вірувань і культів, що мали місце
          на території розселення слов'янських народів у дохристиянську епоху.
          Прийняття християнства (приблизно у IX–XII століттях) стало поворотною
          віхою в історії всіх слов'янських народів. Після прийняття
          християнства міфологічні вірування відокремилися у язичництво, а ті,
          хто дотримувався подібного сприйняття світу, стали називатися
          язичниками або поганцями, тому в наш час зустрічаються наступні назви:
          поганська або язичницька міфологія.
        </div>
      </Box>

      <div className={styles.trippleBoxWrapper}>
        <div
          className={classNames(
            styles.singleBoxWrapper,
            styles.box,
            styles.box1
          )}
        >
          Світосприйняття і міфологія слов'ян формувалася протягом тривалого
          періоду етногенезу слов'ян на базі культури праслов'ян, яку наразі
          можливо оцінити лише по матеріальним археологічним знахідкам.
        </div>
        <div className={styles.doubleBoxWrapper}>
          <div className={classNames(styles.box, styles.box2)}>
            <img src={HistoryImage1} alt="image1" />
          </div>
          <div className={classNames(styles.box, styles.box3)}>
            Від древності до VI—IX ст.
          </div>
        </div>
      </div>

      <Box
        className={classNames(styles.roseContent, styles.featuresOfMythology)}
      >
        <div className={styles.left}>
          <img src={HistoryImage2} alt="image2" />
          <div className={styles.featuresOfMythologyHeader}>
            Особливості міфології
          </div>
        </div>
        <div className={styles.right}>
          Міфи і пантеон слов'ян тісно пов'язаний із Рігведою, Авестою, і
          релігіями індоєвропейців. Основні гілки слов'янської міфології —
          східна (руська), південна (болгарська), західна (польська, чеська,
          вендська).
        </div>
      </Box>

      <Box className={styles.finalContent}>
        <img src={HistoryImage3} alt="image3" />
        <div className={styles.finalTextWrapper}>
          <div className={styles.finalText}>
            Взагалі в розпорядженні вчених вкрай мало відомостей про міфологію
            давніх слов'ян, особливо ж це стосується часів загальнослов'янської
            єдності. Це пояснюється багатьма факторами, і перш за все —
            відсутністю власної писемності і віддаленістю від основних центрів
            міської латинської або грецькомовних писемної культури. Одним з
            перших письмових описів релігії древніх слов'ян є опис
            візантійського історика Прокопія Кесарійського (VI століття)
          </div>
        </div>
      </Box>
    </Main>
  );
};
