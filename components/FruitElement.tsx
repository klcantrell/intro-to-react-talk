import styles from '../styles/App.module.css';
import { FruitData } from './App';

interface Props {
  fruit: FruitData,
  onClick: () => void;
}

export default function FruitElement({ fruit, onClick }: Props) {
  return (
    <div
      style={{ top: fruit.top, left: fruit.left }}
      className={styles.fruitElement}
      onClick={onClick}
    >
      {fruit.text}
    </div>
  );
}
