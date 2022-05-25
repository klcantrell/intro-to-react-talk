import React, { ChangeEvent, useEffect, useState } from 'react';
import CountDisplay from '../components/CountDisplay';;
import AddButton from '../components/AddButton';
import FruitContainer from '../components/FruitContainer';
import Stats from '../components/Stats';
import styles from '../styles/App.module.css';

const FRUIT_EMOJIS = ["🍓", "🍎", "🍇", "🍌", "🫐"];

export interface FruitData {
  text: string;
  top: number;
  left: number;
}

export default function App() {
  const [fruitEmojis, setFruitEmojis] = React.useState<FruitData[]>([]);
  const [totalFruitsBopped, setTotalFruitsBopped] = React.useState(0);
  const [mounted, setMounted] = useState(false);
  const fruitContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onAddClicked = () => {
    const newFruit = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
    setFruitEmojis((previousFruits) => [
      ...previousFruits,
      {
        text: newFruit,
        top: Math.random() * fruitContainerRef.current!.getBoundingClientRect().height,
        left: Math.random() * fruitContainerRef.current!.getBoundingClientRect().width,
      },
    ]);
  };

  const onFruitEmojiClicked = ({ atIndex }: { atIndex: number }) => {
    setFruitEmojis((previousFruits) =>
      previousFruits.filter((_fruit, i) => i !== atIndex)
    );
    setTotalFruitsBopped((previousTotal) => previousTotal + 1);
  };

  const onDisplayChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const numFruitsToAdd = parseInt(event.target.value) < 0 || isNaN(parseInt(event.target.value))
      ? 0
      : parseInt(event.target.value);

    const newFruits = [];
    for (let i = 0; i < numFruitsToAdd; i++) {
      const newFruit = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
      newFruits.push(
        {
          text: newFruit,
          top: Math.random() * fruitContainerRef.current!.getBoundingClientRect().height,
          left: Math.random() * fruitContainerRef.current!.getBoundingClientRect().width,
        },
      );
    }

    setFruitEmojis(newFruits);
  };

  return (
    <main className={styles.appContainer}>
      <Stats heading="Stats">
        <Stats.Item label="Fruits unbopped" value={fruitEmojis.length} />
        <Stats.Divider />
        <Stats.Item label="Total fruits bopped" value={totalFruitsBopped} />
      </Stats>
      {!mounted && (
        <p className={styles.loadingStatusMessage}>Loading app...</p>
      )}
      <CountDisplay disabled={!mounted} value={fruitEmojis.length} onChange={mounted ? onDisplayChanged : undefined} />
      <AddButton disabled={!mounted} onClick={mounted ? onAddClicked : undefined} title="+" />
      <FruitContainer
        containerRef={fruitContainerRef}
        fruits={fruitEmojis}
        onFruitClicked={onFruitEmojiClicked}
      />
    </main>
  );
}
