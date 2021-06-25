import React from 'react'
import Orbits from './Orbits'
import {
  PlanetCode,
  PlanetCore,
  PlanetDashboard,
  PlanetHub,
  PlanetCoreWithMoon,
  PlanetHubWithTorroidMoon
} from './Planets'

const mercuryRevolutionTimePeriod = 20
const venusRevolutionTimePeriod = 40
const earthRevolutionTimePeriod = 60
const marsRevolutionTimePeriod = 100
const jupiterRevolutionTimePeriod = 144

export const solarSystemSize = 120

const HeroAnimation = () => {
  return (
    <div className="solar-system-container absolute">
      <Orbits>
        <div className="absolute w-full top-0 planets-container">
          <ul className="solarsystem">
            <li className="mercury flex justify-between">
              <PlanetCode rotationPeriod={mercuryRevolutionTimePeriod} />
            </li>
            <li className="venus flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="" />
                <PlanetCode rotationPeriod={venusRevolutionTimePeriod} className="" />
              </div>
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="" />
                <PlanetCoreWithMoon rotationPeriod={venusRevolutionTimePeriod} />
              </div>
            </li>
            <li className="earth flex">
              <div className="flex flex-col justify-between">
                <PlanetHub rotationPeriod={earthRevolutionTimePeriod} className="" />
                <PlanetDashboard rotationPeriod={earthRevolutionTimePeriod} className="" />
              </div>
            </li>
            <li className="mars flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetHubWithTorroidMoon rotationPeriod={marsRevolutionTimePeriod} className="" />
              </div>
            </li>
            <li className="jupiter flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={jupiterRevolutionTimePeriod} className="" />
                <PlanetCode rotationPeriod={jupiterRevolutionTimePeriod} className="" />
              </div>
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={jupiterRevolutionTimePeriod} className="" />
                <PlanetCoreWithMoon rotationPeriod={jupiterRevolutionTimePeriod} />
              </div>
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
            top: -145%;
            right: -48%;
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
            width: 14%;
            height: 14%;
            border-radius: 0%;
            top: 41%;
            left: 41%;
            z-index: 99;
          }

          .solarsystem li.venus {
            width: 26%;
            height: 26%;
            border-radius: 0%;
            top: 35%;
            left: 35%;
            z-index: 98;
          }

          .solarsystem li.earth {
            width: 37.5%;
            height: 37.5%;
            border-radius: 0%;
            top: 29.3%;
            left: 29.3%;
            z-index: 97;
          }

          .solarsystem li.mars {
            width: 48.5%;
            height: 48.5%;
            border-radius: 0%;
            top: 23.5%;
            left: 23.5%;
            z-index: 96;
          }

          .solarsystem li.jupiter {
            width: 60%;
            height: 60%;
            border-radius: 0%;
            top: 18%;
            left: 18%;
            z-index: 96;
          }

          /* CSS3 Animations */
          .solarsystem li {
            animation-iteration-count: infinite;
            animation-timing-function: linear;
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
          .solarsystem li.jupiter {
            animation-duration: ${jupiterRevolutionTimePeriod}s;
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
