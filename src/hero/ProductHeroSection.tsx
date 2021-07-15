import React from 'react'
import { Section } from '../layout/Section'
import IllustrationWithComponentSideBySide from '../template/IllustrationWithComponentSideBySide'
import HeroSectionContent, { HeroSectionContentProps } from './HeroSectionContent'

export interface ProductHeroSectionProps extends HeroSectionContentProps {
  illustrationSrc: string;
  illustrationAlt: string;
  illustrationClasses: string;
  illustrationPosition: 'left' | 'right' | undefined;
}

const ProductHeroSection = ({
  illustrationSrc,
  illustrationAlt,
  illustrationClasses = 'w-9/12',
  illustrationPosition = 'right',
  titlePart1,
  description,
  buttonLabel,
  className = 'w-4/6 flex flex-col justify-center',
  buttonClasses = 'w-64'
}: ProductHeroSectionProps) => {
  return (
    <div className="bg-primary-500">
      <Section>
        <IllustrationWithComponentSideBySide
          illustrationSrc={illustrationSrc}
          illustrationAlt={illustrationAlt}
          illustrationClasses={illustrationClasses}
          illustrationPosition={illustrationPosition}
        >
          <HeroSectionContent
            titlePart1={titlePart1}
            description={description}
            buttonLabel={buttonLabel}
            className={className}
            buttonClasses={buttonClasses}
            titleClasses="text-white"
            descriptionClasses="mb-16 text-gray-400 text-lg "
          />
        </IllustrationWithComponentSideBySide>
      </Section>
    </div>
  )
}

export default ProductHeroSection
