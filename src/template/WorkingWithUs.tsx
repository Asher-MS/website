import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const WorkingWithUs = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          <span>{websiteCopyStrings.careersWorkingWithUsSectionHeadingPart1}</span>
          &nbsp;
          <span className="text-primary-500">
            {websiteCopyStrings.careersWorkingWithUsSectionHeadingPart2}
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-y-16 px-4 md:px-0 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-2xl">
            {websiteCopyStrings.careersWorkingWithUsNationalitiesTitle}
          </h5>
          <h3 className="text-primary-500 font-bold text-5xl">
            {websiteCopyStrings.careersWorkingWithUsNationalitiesAmount}
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-2xl">
            {websiteCopyStrings.careersWorkingWithUsLanguagesTitle}
          </h5>
          <h3 className="text-primary-500 font-bold text-5xl">
            {websiteCopyStrings.careersWorkingWithUsLanguagesAmount}
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-2xl">
            {websiteCopyStrings.careersWorkingWithUsTechnologiesTitle}
          </h5>
          <h3 className="text-primary-500 font-bold text-5xl">
            {websiteCopyStrings.careersWorkingWithUsTechnologiesAmount}
          </h3>
        </div>
      </div>
    </Section>
  )
}

export default WorkingWithUs
