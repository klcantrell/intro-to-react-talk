import { css } from "@emotion/react";

export default function CountDisplay({ value }) {
  return (
    <p css={styles.countDisplay}>{value}</p>
  );
}

const styles = {
  countDisplay: css`
    font-size: 6rem;
    margin-bottom: 20px;
  `,
};
