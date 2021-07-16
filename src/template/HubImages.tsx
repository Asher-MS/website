import React from 'react'
import { HubImageCard } from '../hub/HubImageCard'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const sampleImage = {
  name: 'Test Image',
  description:
    'Image Normalizer is a class that resizes, crops and normalizes images. Since normalization is highly dependent on the model, it is recommended to have it as part of the encoders instead of using it in a dedicated executor. Therefore, misconfigurations resulting in a training-serving-gap are less likely.',
  numStars: 4.5,
  tags: ['hello', 'world', 'this', 'is', 'a', 'test'],
  author: {
    displayName: 'Jo Bench',
    avatarURL: '/assets/images/team/1.svg'
  }
}

export const HubImages = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl my-20">
        <h2 className="text-black mb-16">
          <span className="text-primary-500">{websiteCopyStrings.hubFeaturedTitle1}</span>{' '}
          {websiteCopyStrings.hubFeaturedTitle2}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 gap-y-8">
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
      </div>
      <div className="text-center font-bold text-4xl my-20">
        <h2 className="text-black mb-16">
          <span className="text-primary-500">{websiteCopyStrings.hubImagesTitle1}</span>{' '}
          {websiteCopyStrings.hubImagesTitle2}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 gap-y-8">
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
        <HubImageCard image={sampleImage} />
      </div>
    </Section>
  )
}
