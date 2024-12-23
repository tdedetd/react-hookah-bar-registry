import { JSX } from 'react';
import { PProps } from './P.props';
import styles from './P.module.css';
import classNames from 'classnames';

export function P({ children, className, ...props }: PProps): JSX.Element {
  return (
    <p
      className={classNames(...[className, styles.p].filter(Boolean))}
      {...props}
    >{children}</p>
  );
}
