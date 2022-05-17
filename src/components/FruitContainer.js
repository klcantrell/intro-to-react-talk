import { css } from "@emotion/react";

import FruitElement from "./FruitElement";

export default function FruitContainer({ containerRef, fruits, onFruitClicked }) {
  return (
    <div css={styles.fruitContainer} ref={containerRef}>
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
};
