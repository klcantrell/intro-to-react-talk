import { css } from "@emotion/react";

export default function FruitElement({ fruit, onClick }) {
  return (
    <div
      style={{ top: fruit.top, left: fruit.left }}
      css={styles.fruitElement}
      onClick={onClick}
    >
      {fruit.text}
    </div>
  );
}

const styles = {
  fruitElement: css`
    position: absolute;
    font-size: 3rem;
    pointer-events: auto;
    cursor: default;
  `,
};
