import { css } from "@emotion/react";

export default function FruitContainer({ containerRef, fruits, onFruitClicked }) {

  return (
    <div css={styles.fruitContainer} ref={containerRef}>
      {fruits.map((fruit, index) => (
        <div
          key={index}
          style={{ top: fruit.top, left: fruit.left }}
          css={styles.fruitElement}
          onClick={() => onFruitClicked({ atIndex: index })}
        >
          {fruit.text}
        </div>
      ))}
    </div>
  );
}

const styles = {
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
