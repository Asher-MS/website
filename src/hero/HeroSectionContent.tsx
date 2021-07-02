import React from 'react'
import { Button, DivProps } from '../button/Button'

interface HeroSectionContentProps extends DivProps {
  titlePart1: string;
  titlePart2?: string;
  description: string;
  buttonLabel?: string;
}

const HeroSectionContent = ({
  titlePart1,
  titlePart2,
  description,
  buttonLabel,
  className
}: HeroSectionContentProps) => {
  return (
    <div className={className}>
      <h2 className="font-bold text-4xl mb-8">
        <span className="text-black">{titlePart1}</span>
        &nbsp;
        <span className="text-primary-500">{titlePart2 || ''}</span>
      </h2>
      <p className="mb-8">{description}</p>
      {buttonLabel && (
        <Button primary className="w-56 py-5 mr-10">
          {buttonLabel}
        </Button>
      )}
    </div>
  )
}

export default HeroSectionContent
