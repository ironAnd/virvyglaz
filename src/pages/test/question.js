import styles from './styles.module.scss';

const Input = ({ name, number, checked = false }) => {
  const id = `${name}-${number}`;

  return (
    <div>
      <input type="radio" id={id} name={number} defaultChecked={checked} />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export const Question = ({ number }) => {
  return (
    <fieldset className={styles.questionWrapper}>
      <legend className={styles.questionHeading}>Питання №{number}</legend>
      <div className={styles.questionsBlock}>
        <div>Porta efficitur sapien</div>

        <Input name="mollis" number={number} checked />
        <Input name="euismod" number={number} />
        <Input name="malesuada" number={number} />
        <Input name="praesent" number={number} />
      </div>
    </fieldset>
  );
};
