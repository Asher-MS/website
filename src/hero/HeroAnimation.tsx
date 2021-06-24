import React from 'react'
import Orbits from './Orbits'
import { PlanetCode, PlanetCore, PlanetDashboard, PlanetHub, PlanetWithMoon } from './Planets'

const mercuryRevolutionTimePeriod = 4
const venusRevolutionTimePeriod = 8
const earthRevolutionTimePeriod = 12
const marsRevolutionTimePeriod = 20

const HeroAnimation = () => {
  return (
    <div>
      <ul className="solarsystem">
        <li className="mercury">
          <PlanetCode rotationPeriod={mercuryRevolutionTimePeriod} />
        </li>
        <li className="venus flex justify-between">
          <div className="flex flex-col justify-between">
            <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="" />
            <PlanetCode rotationPeriod={venusRevolutionTimePeriod} className="" />
          </div>
          <div className="flex flex-col justify-between">
            <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="" />
            <PlanetWithMoon />
          </div>
        </li>
        <li className="earth flex">
          <div className="flex flex-col justify-between">
            <PlanetHub rotationPeriod={earthRevolutionTimePeriod} className="" />
            <PlanetDashboard rotationPeriod={earthRevolutionTimePeriod} className="" />
          </div>
        </li>
        <li className="mars">
          <PlanetDashboard rotationPeriod={marsRevolutionTimePeriod} />
        </li>
      </ul>
      <Orbits />
      <style jsx>
        {`
          /* Solar System Styles */
          .solarsystem {
            position: relative;
            height: 640px;
            list-style: none;
            transition: all 0.09s ease-in;
            overflow: hidden;
          }
          .solarsystem li {
            position: absolute;
            border: 1px solid #777777;
          }

          .solarsystem li.mercury {
            width: 16rem;
            height: 16rem;
            border-radius: 8rem;
            top: 12rem;
            left: 28rem;
            z-index: 99;
          }

          .solarsystem li.venus {
            width: 24rem;
            height: 24rem;
            border-radius: 12rem;
            top: 8rem;
            left: 24rem;
            z-index: 98;
          }

          .solarsystem li.earth {
            width: 32rem;
            height: 32rem;
            border-radius: 16rem;
            top: 4rem;
            left: 20rem;
            z-index: 97;
          }

          .solarsystem li.mars {
            width: 40rem;
            height: 40rem;
            border-radius: 20rem;
            top: 0;
            left: 16rem;
            z-index: 96;
          }

          /* CSS3 Animations */
          .solarsystem li {
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-name: revolute;
          }
          .solarsystem li.earth span {
            animation-name: revolute;
          }

          .solarsystem li.mercury {
            animation-duration: ${mercuryRevolutionTimePeriod}s;
          }
          .solarsystem li.venus {
            animation-duration: ${venusRevolutionTimePeriod}s;
          }
          .solarsystem li.earth {
            animation-duration: ${earthRevolutionTimePeriod}s;
          }
          .solarsystem li.mars {
            animation-duration: ${marsRevolutionTimePeriod}s;
          }
          @keyframes revolute {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default HeroAnimation
