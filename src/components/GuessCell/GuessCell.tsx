import styles from './GuessCell.module.css';

type GuessCellProps = {
  letter:string | undefined,
  status:string | undefined,
};

function GuessCell({ letter, status }:GuessCellProps) {
  return <span className={`${styles['guess-cell']} ${status}`}>{letter}</span>;
}
export default GuessCell;
