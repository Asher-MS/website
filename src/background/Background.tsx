import React, { ReactNode } from 'react'
import { DivProps } from '../button/Button'

interface IBackgroundProps extends DivProps {
  children: ReactNode;
  color: string;
}

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} ${props.className}`}>{props.children}</div>
)

export { Background }
