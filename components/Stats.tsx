/* eslint-disable react/display-name */
import styles from '../styles/App.module.css';

interface Props {
  heading: string;
  children: React.ReactNode;
}

export default function Stats({ heading, children }: Props) {
  return (
    <header className={styles.statsContainer}>
      <p className={styles.statsHeading}>{heading}</p>
      {children}
    </header>
  );
}

Stats.Item = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className={styles.statsItem}>
      <p className={styles.statsLabel}>{label}</p>
      <p>{value}</p>
    </div>
  );
}

Stats.Divider = () => {
  return (
    <span className={styles.statsDivider} />
  );
};
