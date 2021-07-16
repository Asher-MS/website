import React from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import CollapsibleElement from './CollapsibleElement'
import Header from './Header'

const accordionData = [
    {title: websiteCopyStrings.careersCommonQASubtitle1, description: websiteCopyStrings.careersCommonQADescription1},
    {title: websiteCopyStrings.careersCommonQASubtitle2, description: websiteCopyStrings.careersCommonQADescription2},
    {title: websiteCopyStrings.careersCommonQASubtitle3, description: websiteCopyStrings.careersCommonQADescription3},
    {title: websiteCopyStrings.careersCommonQASubtitle4, description: websiteCopyStrings.careersCommonQADescription4},
    {title: websiteCopyStrings.careersCommonQASubtitle5, description: websiteCopyStrings.careersCommonQADescription5},
]

const CareersCommonQandA = () => (
    <Section>
        <Header headerStrings={[[websiteCopyStrings.careersCommonQATitlePart1, false], [websiteCopyStrings.careersCommonQATitlePart2, true]]} />
        {accordionData.map(item => (
            <CollapsibleElement title={item.title} content={item.description} key={item.title} />
        ))}
    </Section>
)

export default CareersCommonQandA