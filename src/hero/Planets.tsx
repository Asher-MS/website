import React from 'react'
import { DivProps } from '../button/Button'
import Icon from '../template/Icon'

interface PlanetProps extends DivProps {
  rotationPeriod: number;
  name?: string;
}

export const Planet = ({ className, children, rotationPeriod, name }: PlanetProps) => (
  <div className={`${className} planet-${name} bg-yellow-500 rounded-full p-4 w-16 h-16`}>
    <Icon name={`${name}-white`} className="" />
    <div className="absolute top-1/2 left-1/2">
      <div className="moon-axis relative">{children}</div>
    </div>
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
        .moon-axis {
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-name: revolute;
          animation-duration: 2s;
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

export const PlanetCoreWithMoon = ({ rotationPeriod }: PlanetProps) => (
  <div className={''}>
    <PlanetCore rotationPeriod={rotationPeriod} className="relative">
      <MoonPrimary />
    </PlanetCore>
  </div>
)

export const PlanetHubWithTorroidMoon = ({ rotationPeriod }: PlanetProps) => (
  <div className={''}>
    <PlanetHub rotationPeriod={rotationPeriod} className="relative">
      <MoonRedTorroid />
    </PlanetHub>
  </div>
)

const MoonPrimary = () => (
  <div className="absolute bg-primary-400 w-4 h-4 -top-12 -left-12 rounded-full"></div>
)

const MoonRedTorroid = () => (
  <div className="absolute ring-4 ring-red-500 w-4 h-4 -top-12 -left-12 rounded-full"></div>
)
