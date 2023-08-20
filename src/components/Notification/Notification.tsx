// Styles.
import styles from './Notification.module.css';

function Notification({ children, gameStatus } : NotificationProps) {
  // Show it to the world.
  return (
    <aside className={`${styles.notification} ${styles[gameStatus]}`}>
      {children}
    </aside>
  );
}

export default Notification;
