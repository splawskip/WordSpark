// Styles.
import styles from './Heading.module.css';

function Heading({ as = 'h3', children } : HeadingProps) {
  // Convert it to JSX Tag.
  const HeadingTag = as;
  // Show it to the world.
  return <HeadingTag className={`${styles.heading} ${styles[as]}`}>{children}</HeadingTag>;
}

export default Heading;
