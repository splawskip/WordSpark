// Components.
import VisuallyHidden from '../VisuallyHidden';
// Styles.
import styles from './Heart.module.css';

function Heart() {
  return <span className={styles.heart} title="Love"><VisuallyHidden>Love</VisuallyHidden></span>;
}

export default Heart;
