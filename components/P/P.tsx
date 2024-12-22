import { JSX } from 'react';
import { PProps } from './P.props';
import styles from './P.module.css';

export function P({ children, className, ...props }: PProps): JSX.Element {
  return (
    <p
      className={`${className} ${styles.p}`}
      {...props}
    >{children}</p>
  );
}
