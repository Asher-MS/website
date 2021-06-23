import React from 'react'
import { DivProps } from '../button/Button'
import Icon from '../template/Icon'

type RotateStyleProps = {
  planetSuffix: string;
  duration: number;
};

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

export const PlanetHub = ({ className }: DivProps) => (
  <div className={`${className} planet-hub bg-yellow-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="hub-white" className="" />
    <RotateStyles planetSuffix="hub" duration={12} />
  </div>
)
export const PlanetCore = ({ className }: DivProps) => (
  <div className={`${className} planet-core bg-red-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="core-white" />
    <RotateStyles planetSuffix="core" duration={8} />
  </div>
)
export const PlanetCode = ({ className }: DivProps) => (
  <div className={`${className} planet-code bg-blue-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="code-white" className="rotate-90" />
    <RotateStyles planetSuffix="code" duration={5} />
  </div>
)
export const PlanetDashboard = ({ className }: DivProps) => (
  <div className={`${className} planet-dashboard bg-primary-500 rounded-full p-4 w-16 h-16`}>
    <Icon name="dashboard-white" />
    <RotateStyles planetSuffix="dashboard" duration={20} />
  </div>
)
export const PlaneGreen = ({ className }: DivProps) => (
  <div className={`${className} planet bg-primary-500 rounded-full p-4 w-16 h-16`}></div>
)
