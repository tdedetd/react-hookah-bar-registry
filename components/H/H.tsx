import { JSX, ReactNode } from 'react';
import { HProps, HPropsTag } from './H.props';
import styles from './H.module.css';
import classNames from 'classnames';

const tagMapper: Record<HPropsTag, (children: ReactNode, className: string) => JSX.Element> = {
  h1: (children, className) => <h1 className={className}>{children}</h1>,
  h2: (children, className) => <h2 className={className}>{children}</h2>,
  h3: (children, className) => <h3 className={className}>{children}</h3>,
  h4: (children, className) => <h4 className={className}>{children}</h4>,
  h5: (children, className) => <h5 className={className}>{children}</h5>,
  h6: (children, className) => <h6 className={className}>{children}</h6>,
  p: (children, className) => <p className={className}>{children}</p>,
};

export function H({ children, level, tag, className = '' }: HProps): JSX.Element {
  const tagKey = tag ?? `h${level}`;
  const headerClassName = classNames(styles.h, styles[`h${level}`], className);

  return tagMapper[tagKey](children, headerClassName);
}
