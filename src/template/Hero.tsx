import React from 'react'
import { Background } from '../background/Background'
import { HeroOneButton } from '../hero/HeroOneButton'
import { Section } from '../layout/Section'

const Hero = () => (
  <Background color="bg-gray-200">
    <Section yPadding="pt-20 pb-3">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developer</span>
          </>
        }
        description="The easiest way to build React landing page in seconds."
        image={{
          src: '/assets/images/hero-image.png',
          alt: 'Hero screenshot'
        }}
      />
    </Section>
  </Background>
)

export { Hero }
