import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import CollapsibleElement from './CollapsibleElement'
import Header from './Header'
import Icon from './Icon'

const accordionData = [
  {
    icon: 'contribute5',
    title: websiteCopyStrings.contributeHowToContributeSubtitle1,
    description: websiteCopyStrings.careersCommonQADescription1
  },
  {
    icon: 'contribute4',
    title: websiteCopyStrings.contributeHowToContributeSubtitle2,
    description: websiteCopyStrings.careersCommonQADescription2
  },
  {
    icon: 'contribute3',
    title: websiteCopyStrings.contributeHowToContributeSubtitle3,
    description: websiteCopyStrings.careersCommonQADescription3
  },
  {
    icon: 'contribute2',
    title: websiteCopyStrings.contributeHowToContributeSubtitle4,
    description: websiteCopyStrings.careersCommonQADescription4
  },
  {
    icon: 'contribute1',
    title: websiteCopyStrings.contributeHowToContributeSubtitle5,
    description: websiteCopyStrings.careersCommonQADescription4
  },
  {
    icon: 'contribute6',
    title: websiteCopyStrings.contributeHowToContributeSubtitle6,
    description: websiteCopyStrings.careersCommonQADescription5
  }
]

const HowToContribute = () => (
  <Section>
    <Header
      headerStrings={[
        [websiteCopyStrings.contributeHowToContributeHeaderPart1, false],
        [websiteCopyStrings.contributeHowToContributeHeaderPart2, true],
        [websiteCopyStrings.contributeHowToContributeHeaderPart3, false]
      ]}
    />
    <div className=" divide-solid divide-gray-200 divide-y">
      {accordionData.map((item) => (
        <div className="flex items-center" key="item.title">
          <div>
            <Icon name={item.icon} className="mr-5" />
          </div>
          <div className="flex-grow">
            <CollapsibleElement
              title={item.title}
              content={item.description}
              key={item.title}
              chevronPosition="right"
            />
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export default HowToContribute
