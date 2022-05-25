import styles from '../styles/App.module.css';

interface Props {
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

export default function CountDisplay({ disabled, onChange, value }: Props) {
  return (
    <input disabled={disabled} className={styles.countDisplay} value={value} onChange={onChange} />
  );
}
