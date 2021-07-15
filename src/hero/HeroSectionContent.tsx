import React from 'react'
import { Button, DivProps } from '../button/Button'

export interface HeroSectionContentProps extends DivProps {
  titlePart1: string;
  titlePart2?: string;
  description: string;
  buttonLabel?: string;
  descriptionClasses?: string;
  titleClasses?: string;
  buttonClasses?: string;
}

const HeroSectionContent = ({
  titlePart1,
  titlePart2,
  description,
  buttonLabel,
  className,
  titleClasses = 'text-black',
  descriptionClasses = 'mb-16 text-gray-600 text-lg ',
  buttonClasses
}: HeroSectionContentProps) => {
  return (
    <div className={className}>
      <h2 className="font-bold mb-8">
        <span className={titleClasses}>{titlePart1}</span>
        &nbsp;
        <span className="text-primary-500">{titlePart2 || ''}</span>
      </h2>
      <p className={descriptionClasses}>{description}</p>
      {buttonLabel && (
        <Button primary className={`py-4 ${buttonClasses}`}>
          {buttonLabel}
        </Button>
      )}
      <style>
        {`
          h2 {
            font-size: 3.5rem;
          }
        `}
      </style>
    </div>
  )
}

export default HeroSectionContent
