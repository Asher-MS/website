import React from 'react'
import { Button } from '../button/Button'
import { Section } from '../layout/Section'
import Icon from '../template/Icon'
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
  titlePart2,
  description,
  descriptionClasses,
  buttonLabel,
  className = 'w-4/6 flex flex-col justify-center',
  buttonClasses = 'w-64'
}: ProductHeroSectionProps) => {
  return (
    <div className="product-hero-background">
      <Section>
        <IllustrationWithComponentSideBySide
          illustrationSrc={illustrationSrc}
          illustrationAlt={illustrationAlt}
          illustrationClasses={illustrationClasses}
          illustrationPosition={illustrationPosition}
        >
          <HeroSectionContent
            titleComponent={<ProductHeroTitle titlePart1={titlePart1} titlePart2={titlePart2} />}
            description={description}
            buttonComponent={buttonLabel ? <ProductHeroButton buttonLabel={buttonLabel} /> : <></>}
            className={className}
            buttonClasses={buttonClasses}
            titleClasses="text-white"
            descriptionClasses={`mb-16 text-gray-400 text-lg ${descriptionClasses}`}
          />
        </IllustrationWithComponentSideBySide>
      </Section>
      <style jsx>
        {`
          .product-hero-background {
            background: url('/assets/images/backgrounds/product-background.svg');
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  )
}

type ProductHeroTitleProps = {
  titleClasses?: string;
  titlePart1?: string;
  titlePart2?: string;
};

const ProductHeroTitle = ({ titlePart1, titlePart2 }: ProductHeroTitleProps) => (
  <h2 className="font-bold text-white mb-8">
    <p>{titlePart1}</p>
    <p>{titlePart2 || ''}</p>
  </h2>
)

type ProductHeroButtonProps = {
  buttonLabel?: string;
};

const ProductHeroButton = ({ buttonLabel }: ProductHeroButtonProps) => (
  <Button
    outlined
    fullRounded
    className="flex items-center justify-center px-6 py-4 w-52 rounded-full"
  >
    <Icon name="GitHub-white" className="mr-4 w-8" />
    <span className="mr-4 text-white">{buttonLabel}</span>
  </Button>
)

export default ProductHeroSection
