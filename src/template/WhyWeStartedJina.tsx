import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import IllustrationWithComponentSideBySide from './IllustrationWithComponentSideBySide'

const WhyWeStartedJina = () => {
  return (
    <IllustrationWithComponentSideBySide
      illustrationSrc="/assets/images/about_graphic.svg"
      illustrationAlt="rocket"
      illustrationClasses="w-40"
    >
      <div className="w-56">
        <div className="font-bold text-4xl mb-8">
          <h2 className="text-black">
            <span>{websiteCopyStrings.aboutWhyWeStartedJinaTitlePart1}</span>
            &nbsp;
            <span className="text-primary-500">
              {websiteCopyStrings.aboutWhyWeStartedJinaTitlePart2}
            </span>
          </h2>
        </div>
        <p>{websiteCopyStrings.aboutWhyWeStartedJinaDescription}</p>
      </div>
    </IllustrationWithComponentSideBySide>
  )
}

export default WhyWeStartedJina
