import { css } from "@emotion/react";

export default function Stats({ heading, children }) {
  return (
    <header css={styles.statsContainer}>
      <p css={styles.statsHeading}>{heading}</p>
      {children}
    </header>
  );
}

Stats.Item = ({ label, value }) => {
  return (
    <div css={styles.statsItem}>
      <p css={styles.statsLabel}>{label}</p>
      <p>{value}</p>
    </div>
  );
}

Stats.Divider = () => {
  return (
    <span css={styles.statsDivider} />
  );
};

const styles = {
  statsContainer: css`
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    border: 1px solid black;
    padding-block: 10px;
  `,
  statsHeading: css`
    font-weight: bold;
    margin-left: 5px;
    margin-right: 20px;
  `,

  statsItem: css`
    display: flex;
    align-items: flex-end;
    margin: 0;
  `,
  statsLabel: css`
    margin-right: 5px;
  `,
  statsDivider: css`
    height: 100%;
    border-left: 0.5px;
    border-color: black;
    border-style: solid;
    margin-inline: 15px;
    position: relative;
    border-radius: 10px;
  `,
};
