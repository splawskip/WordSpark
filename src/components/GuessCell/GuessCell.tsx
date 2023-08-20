// Styles.
import styles from './GuessCell.module.css';

function GuessCell({ letter, status } : GuessCellProps) {
  return <span className={`${styles.cell} ${status ? styles[status] : ''} ${status ? styles.validated : ''}`}>{letter}</span>;
}

export default GuessCell;
