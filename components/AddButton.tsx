import styles from '../styles/App.module.css';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
}

export default function AddButton({ disabled, onClick, title }: Props) {
  return (
    <button disabled={disabled} className={styles.addButton} onClick={onClick}>
      {title}
    </button>
  );
}
