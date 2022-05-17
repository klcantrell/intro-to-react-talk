import React from "react";
import ReactDOM from "react-dom/client";
import { css } from "@emotion/react";
import "./app.css";
import CountDisplay from "./components/CountDisplay";
import AddButton from "./components/AddButton";
import FruitContainer from "./components/FruitContainer";
import Stats from "./components/Stats";

const FRUIT_EMOJIS = ["🍓", "🍎", "🍇", "🍌", "🫐"];

function App() {
  const [fruitEmojis, setFruitEmojis] = React.useState([]);
  const [totalFruitsBopped, setTotalFruitsBopped] = React.useState(0);
  const fruitContainerRef = React.useRef();

  const onAddClicked = () => {
    const newFruit = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
    setFruitEmojis((previousFruits) => [
      ...previousFruits,
      {
        text: newFruit,
        top: Math.random() * fruitContainerRef.current.getBoundingClientRect().height,
        left: Math.random() * fruitContainerRef.current.getBoundingClientRect().width,
      },
    ]);
  };

  const onFruitEmojiClicked = ({ atIndex }) => {
    setFruitEmojis((previousFruits) =>
      previousFruits.filter((_fruit, i) => i !== atIndex)
    );
    setTotalFruitsBopped((previousTotal) => previousTotal + 1);
  };

  const onDisplayChanged = (event) => {
    const numFruitsToAdd = parseInt(event.target.value) < 0 || isNaN(parseInt(event.target.value))
      ? 0
      : parseInt(event.target.value);

    const newFruits = [];
    for (let i = 0; i < numFruitsToAdd; i++) {
      const newFruit = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
      newFruits.push(
        {
          text: newFruit,
          top: Math.random() * fruitContainerRef.current.getBoundingClientRect().height,
          left: Math.random() * fruitContainerRef.current.getBoundingClientRect().width,
        },
      );
    }

    setFruitEmojis(newFruits);
  };

  return (
    <main css={styles.appContainer}>
      <Stats heading="Stats">
        <Stats.Item label="Fruits unbopped" value={fruitEmojis.length} />
        <Stats.Divider />
        <Stats.Item label="Total fruits bopped" value={totalFruitsBopped} />
      </Stats>
      <CountDisplay value={fruitEmojis.length} onChange={onDisplayChanged} />
      <AddButton onClick={onAddClicked} title="+" />
      <FruitContainer
        containerRef={fruitContainerRef}
        fruits={fruitEmojis}
        onFruitClicked={onFruitEmojiClicked}
      />
    </main>
  );
}

const styles = {
  appContainer: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      343deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(21, 9, 121, 0.8197872899159664) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  `,
};

const appRoot = ReactDOM.createRoot(document.getElementById("app"));
appRoot.render(<App />);
