import React from 'react'
import { PlanetCode, PlanetCore, PlanetDashboard, PlanetHub } from './Planets'

const HeroAnimation = () => {
  return (
    <div>
      <ul className="solarsystem">
        <li className="mercury">
          <PlanetCode />
        </li>
        <li className="venus">
          <PlanetCore />
        </li>
        <li className="earth">
          <PlanetHub />
        </li>
        <li className="mars">
          <PlanetDashboard />
        </li>
      </ul>
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
            display: block;
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
            animation-duration: 5s;
          }
          .solarsystem li.venus {
            animation-duration: 8s;
          }
          .solarsystem li.earth {
            animation-duration: 12s;
          }
          .solarsystem li.earth span {
            animation-duration: 2s;
          }
          .solarsystem li.mars {
            animation-duration: 20s;
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
