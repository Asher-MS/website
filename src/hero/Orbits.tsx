import React from 'react'

const Orbits = () => (
  <div>
    <ul className="solarsystem">
      <li className="mercury"> </li>
      <li className="venus"> </li>
      <li className="earth"> </li>
      <li className="mars"> </li>
    </ul>
    <style jsx>
      {`
        /* Solar System Styles */
        .solarsystem {
          position: relative;
          height: 640px;
          list-style: none;
          overflow: hidden;
        }
        .solarsystem li {
          display: block;
          position: absolute;
          border: 1px dashed rgba(0, 174, 172, 0.6);
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
      `}
    </style>
  </div>
)

export default Orbits
