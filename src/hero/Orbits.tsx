import React from 'react'
import { DivProps } from '../button/Button'
import { solarSystemSize } from './HeroAnimation'

const Orbits = ({ children }: DivProps) => (
  <div className="relative">
    <ul className="solarsystem">
      <li className="mercury"> </li>
      <li className="venus"> </li>
      <li className="earth"> </li>
      <li className="mars"> </li>
    </ul>
    {children}
    <style jsx>
      {`
        /* Solar System Styles */
        .solarsystem {
          position: relative;
          height: ${solarSystemSize}rem;
          list-style: none;
          overflow: hidden;
        }
        .solarsystem li {
          display: block;
          position: absolute;
          border: 1px dashed rgba(0, 174, 172, 0.6);
        }

        .solarsystem li.mercury {
          width: 32%;
          height: 32%;
          border-radius: 50%;
          top: 32%;
          left: 32%;
          z-index: 99;
        }

        .solarsystem li.venus {
          width: 48%;
          height: 48%;
          border-radius: 50%;
          top: 24%;
          left: 24%;
          z-index: 99;
        }

        .solarsystem li.earth {
          width: 64%;
          height: 64%;
          border-radius: 50%;
          top: 16%;
          left: 16%;
          z-index: 98;
        }

        .solarsystem li.mars {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          top: 8%;
          left: 8%;
          z-index: 97;
        }
      `}
    </style>
  </div>
)

export default Orbits
