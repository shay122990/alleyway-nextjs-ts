import { FC } from 'react';
import styles from './Message-Display.module.css';

type MessageDisplayProps = {
  message: string;
  type: 'success' | 'error';
  onClose?: () => void;
};

const MessageDisplay: FC<MessageDisplayProps> = ({ message, type, onClose }) => {
  return (
    <div className={`${styles.message} ${type === 'success' ? styles.success : styles.error}`}>
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
      )}
    </div>
  );
};

export default MessageDisplay;
