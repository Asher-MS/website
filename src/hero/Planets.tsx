import React from 'react'
import { DivProps } from '../button/Button'
import Icon from '../template/Icon'

interface PlanetProps extends DivProps {
  rotationPeriod: number;
  name?: string;
}

export const Planet = ({ className, rotationPeriod, name }: PlanetProps) => (
  <div
    className={`${className} planet-${name} bg-yellow-500 rounded-full flex place-items-center place-content-center`}
  >
    <Icon name={`${name}-white`} className="w-2/3 h-2/3" />
    <style jsx>
      {`
        @keyframes revolute {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .planet-${name} {
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-name: revolute;
          animation-duration: ${rotationPeriod}s;
        }
      `}
    </style>
  </div>
)

export const PlanetHub = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="hub" className={`${className} bg-yellow-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
export const PlanetCore = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="core" className={`${className} bg-red-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
export const PlanetCode = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="code" className={`${className} bg-blue-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
export const PlanetDashboard = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet
    name="dashboard"
    className={`${className} bg-primary-500`}
    rotationPeriod={rotationPeriod}
  >
    {children}
  </Planet>
)
export const PlanetText = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="text" className={`${className} bg-primary-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
export const PlanetVideo = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="video" className={`${className} bg-yellow-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
export const PlanetImage = ({ className, children, rotationPeriod }: PlanetProps) => (
  <Planet name="image" className={`${className} bg-red-500`} rotationPeriod={rotationPeriod}>
    {children}
  </Planet>
)
