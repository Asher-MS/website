import React from 'react'
import Orbits from './Orbits'
import { PlanetCode, PlanetCore, PlanetDashboard, PlanetHub, PlanetWithMoon } from './Planets'

const mercuryRevolutionTimePeriod = 4
const venusRevolutionTimePeriod = 8
const earthRevolutionTimePeriod = 12
const marsRevolutionTimePeriod = 20

export const solarSystemSize = 100

const HeroAnimation = () => {
  return (
    <div className="solar-system-container absolute">
      <Orbits>
        <div className="absolute w-full top-0 planets-container">
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
        </div>
      </Orbits>
      <style jsx>
        {`
          /* Solar System Styles */
          .solar-system-container {
            width: ${solarSystemSize}rem;
            height: ${solarSystemSize}rem;
            top: -120%;
            right: -40%;
          }
          .solarsystem {
            position: relative;
            width: ${solarSystemSize}rem;
            height: ${solarSystemSize}rem;
            list-style: none;
            transition: all 0.09s ease-in;
            overflow: hidden;
          }
          .solarsystem li {
            position: absolute;
          }
          .planets-container {
            width: ${solarSystemSize}rem;
            height: ${solarSystemSize}rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
          }
          .solarsystem li.mercury {
            width: 28%;
            height: 28%;
            border-radius: 50%;
            top: 34%;
            left: 34%;
            z-index: 99;
          }

          .solarsystem li.venus {
            width: 39%;
            height: 39%;
            border-radius: 50%;
            top: 29%;
            left: 29%;
            z-index: 98;
          }

          .solarsystem li.earth {
            width: 50%;
            height: 50%;
            border-radius: 50%;
            top: 23%;
            left: 23%;
            z-index: 97;
          }

          .solarsystem li.mars {
            width: 62%;
            height: 62%;
            border-radius: 50%;
            top: 17%;
            left: 17%;
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
