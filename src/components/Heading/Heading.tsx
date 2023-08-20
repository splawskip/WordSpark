// Styles.
import styles from './Heading.module.css';

function Heading({ as = 'h3', type = 'heading', children } : HeadingProps) {
  // Convert it to JSX Tag.
  const HeadingTag = as;
  // Show it to the world.
  return <HeadingTag className={`${styles.heading} ${styles[as]} ${styles[type]}`}>{children}</HeadingTag>;
}

export default Heading;
