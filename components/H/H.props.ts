import { ReactNode } from 'react';

export type HPropsTag = `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p';

export interface HProps {
  children: ReactNode;
  level: 1 | 2 | 3;
  tag?: HPropsTag;
  className?: string;
}
