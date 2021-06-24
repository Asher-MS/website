import React from 'react'
import { DivProps } from '../button/Button'
import Icon from '../template/Icon'

type RotateStyleProps = {
  planetSuffix: string;
  duration: number;
};

interface PlanetProps extends DivProps {
  rotationPeriod: number;
}

const RotateStyles = ({ planetSuffix, duration }: RotateStyleProps) => (
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
      .planet-${planetSuffix} {
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: revolute;
        animation-duration: ${duration}s;
      }
    `}
  </style>
)

export const PlanetHub = ({ className, rotationPeriod }: PlanetProps) => (
  <div className={`${className} planet-hub bg-yellow-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="hub-white" className="" />
    <RotateStyles planetSuffix="hub" duration={rotationPeriod} />
  </div>
)
export const PlanetCore = ({ className, children, rotationPeriod }: PlanetProps) => (
  <div className={`${className} planet-core bg-red-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="core-white" />
    {children}
    <RotateStyles planetSuffix="core" duration={rotationPeriod} />
  </div>
)
export const PlanetCode = ({ className, rotationPeriod }: PlanetProps) => (
  <div className={`${className} planet-code bg-blue-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="code-white" className="rotate-90" />
    <RotateStyles planetSuffix="code" duration={rotationPeriod} />
  </div>
)
export const PlanetDashboard = ({ className, rotationPeriod }: PlanetProps) => (
  <div className={`${className} planet-dashboard bg-primary-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="dashboard-white" />
    <RotateStyles planetSuffix="dashboard" duration={rotationPeriod} />
  </div>
)

export const PlanetWithMoon = () => (
  <div className={''}>
    <PlanetCore rotationPeriod={8} className="relative">
      <div className="absolute top-1/2 left-1/2">
        <div className="planet-moon-axis relative">
          <div className="absolute bg-primary-400 w-4 h-4 -top-12 -left-12 rounded-full"></div>
          <RotateStyles planetSuffix="moon-axis" duration={2} />
        </div>
      </div>
    </PlanetCore>
  </div>
)
