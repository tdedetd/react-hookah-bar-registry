import { JSX } from 'react';
import { LoungeCardProps } from './LoungeCard.props';
import styles from './LoungeCard.module.css';
import { P } from '../P/P';
import { H } from '../H/H';

export function LoungeCard({ lounge }: LoungeCardProps): JSX.Element {
  const imageUrl = '/images/lounge-thumbnail-mock.jpg';

  return (
    <div className={styles.card}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      ></div>
      <div className={styles.info}>
        <H className={styles['info__name']} level={2} tag='p'>{lounge.name}</H>
        <P>{lounge.address}</P>
      </div>
    </div>
  );
}
