import { loungesMock } from './utils/constants/lounges-mock';
import styles from './page.module.css';
import { LoungeCard } from '../components';

export default function LoungeList() {
  const list = loungesMock.map((lounge, i) => {
    return (
      <li key={i}>
        <LoungeCard lounge={lounge}></LoungeCard>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles['lounge-list']}>
        {list}
      </ul>
    </div>
  );
}
