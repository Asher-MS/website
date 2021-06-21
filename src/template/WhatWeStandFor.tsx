import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const whatWeStandForData = [
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle1,
    description: websiteCopyStrings.careersWhatWeStandForDescription1
  },
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle2,
    description: websiteCopyStrings.careersWhatWeStandForDescription2
  },
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle3,
    description: websiteCopyStrings.careersWhatWeStandForDescription3
  },
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle4,
    description: websiteCopyStrings.careersWhatWeStandForDescription4
  },
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle5,
    description: websiteCopyStrings.careersWhatWeStandForDescription5
  },
  {
    title: websiteCopyStrings.careersWhatWeStandForTitle6,
    description: websiteCopyStrings.careersWhatWeStandForDescription6
  }
]

const WhatWeStandFor = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          <span>{websiteCopyStrings.careersWhatWeStandForSectionTitlePart1}</span>
          <span>&nbsp;</span>
          <span className="text-primary-500">
            {websiteCopyStrings.careersWhatWeStandForSectionTitlePart2}
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-16 px-4 md:px-0">
        {whatWeStandForData.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="text-gray-600 mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default WhatWeStandFor
