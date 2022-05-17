import { css } from "@emotion/react";

export default function AddButton({ onClick, title }) {
  return (
    <button css={styles.addButton} onClick={onClick}>
      {title}
    </button>
  );
}

const styles = {
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
};