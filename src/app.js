import React from "react";
import ReactDOM from "react-dom/client";
import { css } from "@emotion/react";
import "./app.css";
import CountDisplay from "./components/CountDisplay";
import AddButton from "./components/AddButton";
import FruitContainer from "./components/FruitContainer";

const FRUIT_EMOJIS = ["🍓", "🍎", "🍇", "🍌", "🫐"];

function App() {
  const [fruitEmojis, setFruitEmojis] = React.useState([]);
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
  };

  return (
    <main css={styles.appContainer}>
      <CountDisplay value={fruitEmojis.length} />
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
    height: calc(100% - 100px);
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
    padding-top: 100px;
  `,
};

const appRoot = ReactDOM.createRoot(document.getElementById("app"));
appRoot.render(<App />);
