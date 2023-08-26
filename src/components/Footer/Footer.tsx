// Components.
import Heart from '../Heart';
// Styles.
import styles from './Footer.module.css';

function Footer() {
  // Show it to the world.
  return (
    <footer className={styles.footer}>
      <p className="footer__copyright copyright">
        Made with
        {' '}
        <Heart />
        {' '}
        by psplawski.dev.
      </p>
    </footer>
  );
}

export default Footer;
