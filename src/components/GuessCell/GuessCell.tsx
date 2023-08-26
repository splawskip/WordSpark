// Styles.
import styles from './GuessCell.module.css';

function GuessCell({ letter, status } : GuessCellProps) {
  // Show it to the world.
  return <span className={`${styles.cell} ${status ? styles[status] : ''} ${status ? styles.validated : ''}`}>{letter}</span>;
}

export default GuessCell;
