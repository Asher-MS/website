import { Section } from '../layout/Section'
import React from 'react'
import { DivProps } from '../button/Button'

interface IllustrationWithComponentSideBySideProps extends DivProps {
  illustrationPosition?: 'right' | 'left';
  illustrationSrc: string;
  illustrationAlt: string;
  illustrationClasses: string;
}

const IllustrationWithComponentSideBySide = ({
  illustrationPosition,
  illustrationSrc,
  illustrationAlt,
  illustrationClasses,
  children
}: IllustrationWithComponentSideBySideProps) => {
  const flexDirectionClass = illustrationPosition === 'right' ? 'flex-row-reverse' : 'flex-row'
  return (
    <Section>
      <div className={`flex ${flexDirectionClass}`}>
        <div className={illustrationClasses}>
          <img src={illustrationSrc} alt={illustrationAlt} />
        </div>
        {children}
      </div>
    </Section>
  )
}

export default IllustrationWithComponentSideBySide
