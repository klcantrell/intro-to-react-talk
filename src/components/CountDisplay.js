import { css } from "@emotion/react";

export default function CountDisplay({ onChange, value }) {
  return (
    <input css={styles.countDisplay} value={value} onChange={onChange} />
  );
}

const styles = {
  countDisplay: css`
    font-size: 6rem;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
  `,
};
