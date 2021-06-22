import React from 'react'

const HeroAnimation = () => {
  return (
    <div>
      <ul className="solarsystem">
        <li className="mercury">
          <a href="#mercury">
            <span></span>
          </a>
        </li>
        <li className="venus">
          <a href="#venus">
            <span></span>
          </a>
        </li>
        <li className="earth">
          <a href="#earth">
            <span>
              <span className="moon"></span>
            </span>
          </a>
        </li>
        <li className="mars">
          <a href="#mars">
            <span></span>
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          /* Solar System Styles */
          ul.solarsystem {
            position: relative;
            height: 640px;
            list-style: none;
            transition: all 0.09s ease-in;
            overflow: hidden;
          }
          ul.solarsystem li {
            display: block;
            position: absolute;
            border: 2px dashed #394057;
          }
          ul.solarsystem li span {
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 5px;
          }
          ul.solarsystem li.mercury {
            width: 100px;
            height: 100px;
            border-radius: 52px;
            top: 270px;
            left: 430px;
            z-index: 99;
          }
          ul.solarsystem li.mercury span {
            background: #b6bac5;
            top: 10px;
            left: 10px;
          }
          ul.solarsystem li.venus {
            width: 160px;
            height: 160px;
            border-radius: 82px;
            top: 240px;
            left: 400px;
            z-index: 98;
          }
          ul.solarsystem li.venus span {
            background: #bf8639;
            top: 118px;
            left: 5px;
          }
          ul.solarsystem li.earth {
            width: 220px;
            height: 220px;
            border-radius: 112px;
            top: 210px;
            left: 370px;
            z-index: 97;
          }
          ul.solarsystem li.earth span {
            background: #06c;
            top: 56px;
            left: 5px;
          }
          ul.solarsystem li.earth span.moon {
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #ccc;
            top: 12px;
            left: 12px;
          }
          ul.solarsystem li.mars {
            width: 280px;
            height: 280px;
            border-radius: 142px;
            top: 180px;
            left: 340px;
            z-index: 96;
          }
          ul.solarsystem li.mars span {
            background: #aa4200;
            top: 0px;
            left: 175px;
          }
          /* CSS3 Animations */
          ul.solarsystem li {
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -webkit-animation-name: orbit;
            animation-name: orbit;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: linear;
            -moz-animation-name: orbit;
          }
          ul.solarsystem li.earth span {
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -webkit-animation-name: moon;
            animation-name: moon;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: linear;
            -moz-animation-name: moon;
          }
          ul.solarsystem li.mercury {
            animation-duration: 5s;
            -webkit-animation-duration: 5s;
            -moz-animation-duration: 5s;
          }
          ul.solarsystem li.venus {
            animation-duration: 8s;
            -webkit-animation-duration: 8s;
            -moz-animation-duration: 8s;
          }
          ul.solarsystem li.earth {
            animation-duration: 12s;
            -webkit-animation-duration: 12s;
            -moz-animation-duration: 12s;
          }
          ul.solarsystem li.earth span {
            animation-duration: 2s;
            -webkit-animation-duration: 2s;
            -moz-animation-duration: 2s;
          }
          ul.solarsystem li.mars {
            animation-duration: 20s;
            -webkit-animation-duration: 20s;
            -moz-animation-duration: 20s;
          }

          @-webkit-keyframes orbit {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @-moz-keyframes orbit {
            from {
              -moz-transform: rotate(0deg);
            }
            to {
              -moz-transform: rotate(360deg);
            }
          }
          @-webkit-keyframes moon {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes moon {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @-moz-keyframes moon {
            from {
              -moz-transform: rotate(0deg);
            }
            to {
              -moz-transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default HeroAnimation
