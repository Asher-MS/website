import React, { ReactNode } from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

type LearnCardProps = {
  header: string;
  copy: string;
  link: string;
  icon: ReactNode;
};
const LearnCard = ({ header, copy, link, icon }: LearnCardProps) => (
  <a
    href={link}
    className="flex flex-col items-center bg-white shadow-xl rounded-xl p-6 m-12 mt-6 LearnCard"
  >
    <div className="mb-2">{icon}</div>
    <style jsx>
      {`
        .LearnCard {
          flex: 0 0 25%;
        }
      `}
    </style>
    <h3 className="text-gray-600 font-bold mb-2">{header}</h3>
    <p className="text-gray-600 font-light mb-2">{copy}</p>
  </a>
)

function LearnMore () {
  return (
    <Section>
      <h2 className="text-center font-bold text-4xl mb-10">
        {websiteCopyStrings.joinLearnHeaderPart1}
        <span className="text-primary-500">{websiteCopyStrings.joinLearnHeaderPart2}</span>
        {websiteCopyStrings.joinLearnHeaderPart3}
      </h2>

      <div className="flex flex-wrap justify-center">
        <LearnCard
          header={websiteCopyStrings.joinLearnCard0Header}
          copy={websiteCopyStrings.joinLearnCard0Copy}
          icon={<img alt="Twitter" src="/assets/images/icons/Twitter-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard0Link}
        />

        <LearnCard
          header={websiteCopyStrings.joinLearnCard1Header}
          copy={websiteCopyStrings.joinLearnCard1Copy}
          icon={<img alt="GitHub" src="/assets/images/icons/GitHub-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard1Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard2Header}
          copy={websiteCopyStrings.joinLearnCard2Copy}
          icon={<img alt="LinkedIn" src="/assets/images/icons/LinkedIn-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard2Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard3Header}
          copy={websiteCopyStrings.joinLearnCard3Copy}
          icon={<img alt="NewsLetter" src="/assets/images/icons/newsletter-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard3Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard4Header}
          copy={websiteCopyStrings.joinLearnCard4Copy}
          icon={<img alt="Slack" src="/assets/images/icons/Slack-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard4Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard5Header}
          copy={websiteCopyStrings.joinLearnCard5Copy}
          icon={<img alt="YouTube" src="/assets/images/icons/YouTube-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard5Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard6Header}
          copy={websiteCopyStrings.joinLearnCard6Copy}
          icon={<img alt="Articles" src="/assets/images/icons/articles-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard6Link}
        />
        <LearnCard
          header={websiteCopyStrings.joinLearnCard7Header}
          copy={websiteCopyStrings.joinLearnCard7Copy}
          icon={<img alt="Events" src="/assets/images/icons/calendar-icon.svg" />}
          link={websiteCopyStrings.joinLearnCard7Link}
        />
      </div>
    </Section>
  )
}

export default LearnMore
