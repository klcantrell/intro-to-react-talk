import React from "react";
import ReactDOM from "react-dom/client";
import { css } from "@emotion/react";
import "./app.css";

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
      <p css={styles.countDisplay}>{fruitEmojis.length}</p>
      <button css={styles.addButton} onClick={onAddClicked}>
        +
      </button>
      <div css={styles.fruitContainer} ref={fruitContainerRef}>
        {fruitEmojis.map((fruitEmoji, index) => (
          <div
            key={index}
            style={{ top: fruitEmoji.top, left: fruitEmoji.left }}
            css={styles.fruitElement}
            onClick={() => onFruitEmojiClicked({ atIndex: index })}
          >
            {fruitEmoji.text}
          </div>
        ))}
      </div>
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
  countDisplay: css`
    font-size: 6rem;
    margin-bottom: 20px;
  `,
  addButton: css`
    width: 100px;
    height: 100px;
    font-size: 5rem;
    border-radius: 10px;
    border-width: 4px;
    border-top-color: rgb(166, 166, 166);
    border-left-color: rgb(166, 166, 166);
    box-shadow: 2px 2px 8px 0px rgba(0, 21, 43, 0.75);

    &:active {
      border-top-color: rgb(0, 0, 0);
      border-left-color: rgb(0, 0, 0);
      box-shadow: initial;
      opacity: 0.6;
    }
  `,
  fruitContainer: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    overflow: hidden;
  `,
  fruitElement: css`
    position: absolute;
    font-size: 3rem;
    pointer-events: auto;
    cursor: default;
  `,
};

const appRoot = ReactDOM.createRoot(document.getElementById("app"));
appRoot.render(<App />);
