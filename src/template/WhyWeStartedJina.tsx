import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import IllustrationWithComponentSideBySide from './IllustrationWithComponentSideBySide'

const WhyWeStartedJina = () => {
  return (
    <IllustrationWithComponentSideBySide
      illustrationSrc="/assets/images/about_graphic.svg"
      illustrationAlt="rocket"
      illustrationClasses="w-1/2"
    >
      <div className="w-1/2">
        <div className="flex flex-col justify-center h-full">
          <div className="w-5/6">
            <div className="font-bold text-4xl mb-8">
              <h2 className="text-black">
                <span>{websiteCopyStrings.aboutWhyWeStartedJinaTitlePart1}</span>
                &nbsp;
                <span className="text-primary-500">
                  {websiteCopyStrings.aboutWhyWeStartedJinaTitlePart2}
                </span>
              </h2>
            </div>
            <p className="mb-8">{websiteCopyStrings.aboutWhyWeStartedJinaDescriptionPart1}</p>

            <p>{websiteCopyStrings.aboutWhyWeStartedJinaDescriptionPart2}</p>
          </div>
        </div>
      </div>
    </IllustrationWithComponentSideBySide>
  )
}

export default WhyWeStartedJina
