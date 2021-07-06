import React from 'react'
import Orbits from './Orbits'
import {
  PlanetCode,
  PlanetCore,
  PlanetDashboard,
  PlanetHub,
  PlanetText,
  PlanetImage,
  PlanetVideo
} from './Planets'

const mercuryRevolutionTimePeriod = 20
const venusRevolutionTimePeriod = 40
const earthRevolutionTimePeriod = 60
const marsRevolutionTimePeriod = 100
const jupiterRevolutionTimePeriod = 144

export const solarSystemSize = '110rem'

const HeroAnimation = () => {
  return (
    <div className="solar-system-container absolute">
      <Orbits>
        <div className="absolute w-full top-0 planets-container">
          <ul className="solarsystem">
            <li className="mercury flex justify-between">
              <PlanetCode rotationPeriod={mercuryRevolutionTimePeriod} className="w-12 h-12" />
              <PlanetImage rotationPeriod={mercuryRevolutionTimePeriod} className="w-12 h-12" />
            </li>
            <li className="venus flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetVideo rotationPeriod={venusRevolutionTimePeriod} className="w-16 h-16" />
                <PlanetText rotationPeriod={venusRevolutionTimePeriod} className="w-16 h-16" />
              </div>
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="w-16 h-16" />
                <PlanetCore rotationPeriod={venusRevolutionTimePeriod} className="w-16 h-16" />
              </div>
            </li>
            <li className="earth flex">
              <div className="flex flex-col justify-between">
                <PlanetHub rotationPeriod={earthRevolutionTimePeriod} className="w-20 h-20" />
                <PlanetDashboard rotationPeriod={earthRevolutionTimePeriod} className="w-20 h-20" />
              </div>
            </li>
            <li className="mars flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetHub rotationPeriod={marsRevolutionTimePeriod} className="w-24 h-24" />
              </div>
            </li>
            <li className="jupiter flex justify-between">
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={jupiterRevolutionTimePeriod} className="h-28 w-28" />
                <PlanetCode rotationPeriod={jupiterRevolutionTimePeriod} className="h-28 w-28" />
              </div>
              <div className="flex flex-col justify-between">
                <PlanetCore rotationPeriod={jupiterRevolutionTimePeriod} className="h-28 w-28" />
                <PlanetCore rotationPeriod={jupiterRevolutionTimePeriod} className="h-28 w-28" />
              </div>
            </li>
          </ul>
        </div>
      </Orbits>
      <style jsx>
        {`
          /* Solar System Styles */
          .solar-system-container {
            width: ${solarSystemSize};
            height: ${solarSystemSize};
            top: -117%;
            right: -44%;
          }
          @media (min-width: 1024px) {
            .solar-system-container {
              top: -73%;
              right: -108%;
            }
          }
          @media (min-width: 1280px) {
            .solar-system-container {
              top: -112%;
              right: -77%;
            }
          }
          @media (min-width: 1440px) {
            .solar-system-container {
              top: -117%;
              right: -59%;
            }
          }
          @media (min-width: 1536px) {
            .solar-system-container {
              top: -117%;
              right: -44%;
            }
          }
          @media (min-width: 1920px) {
            .solar-system-container {
              top: -117%;
              right: -44%;
            }
          }
          .solarsystem {
            position: relative;
            width: ${solarSystemSize};
            height: ${solarSystemSize};
            list-style: none;
            transition: all 0.09s ease-in;
            overflow: hidden;
          }
          .solarsystem li {
            position: absolute;
          }
          .planets-container {
            width: ${solarSystemSize};
            height: ${solarSystemSize};
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
            width: 38.5%;
            height: 38.5%;
            border-radius: 0%;
            top: 28.7%;
            left: 28.7%;
            z-index: 97;
          }

          .solarsystem li.mars {
            width: 51%;
            height: 51%;
            border-radius: 0%;
            top: 22.5%;
            left: 22.5%;
            z-index: 96;
          }

          .solarsystem li.jupiter {
            width: 63%;
            height: 63%;
            border-radius: 0%;
            top: 16.5%;
            left: 16.5%;
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
