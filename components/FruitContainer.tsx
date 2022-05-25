import { RefObject } from 'react';
import { FruitData } from './App';
import FruitElement from './FruitElement';
import styles from '../styles/App.module.css';

interface Props {
  containerRef: RefObject<HTMLDivElement>;
  fruits: FruitData[];
  onFruitClicked: ({ atIndex }: { atIndex: number; }) => void;
}

export default function FruitContainer({ containerRef, fruits, onFruitClicked }: Props) {
  return (
    <div className={styles.fruitContainer} ref={containerRef}>
      {fruits.map((fruit, index) => (
        <FruitElement
          key={index}
          fruit={fruit}
          onClick={() => onFruitClicked({ atIndex: index })}
        />
      ))}
    </div>
  );
}
