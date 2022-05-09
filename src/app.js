import React from 'react';
import ReactDOM from 'react-dom/client';
import { css } from '@emotion/react';
import './app.css';

const FRUIT_EMOJIS = ['🍓', '🍎', '🍇', '🍌', '🫐'];

function App() {
  const [fruits, setFruits] = React.useState([]);

  return (
    <main css={styles.appContainer}>
      <p>{fruits.length}</p>
      <button
        onClick={() => {
          const newFruit = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
          setFruits((previousFruits) => [...previousFruits, newFruit])
        }}
      >+</button>
    </main>
  );
}

const styles = {
  appContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}

const appRoot = ReactDOM.createRoot(document.getElementById('app'));
appRoot.render(<App />);
