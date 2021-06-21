import React from 'react'
import Image from 'next/image'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const Investors = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          <span>{websiteCopyStrings.aboutInvestorsSectionTitlePart1}</span>
          &nbsp;
          <span className="text-primary-500">
            {websiteCopyStrings.aboutInvestorsSectionTitlePart2}
          </span>
        </h2>
      </div>
      <div className="flex justify-around max-w-screen-lg mx-auto">
        <Image
          src="/assets/images/ggv-investor.png"
          alt="GGV Capial Logo"
          width={415}
          height={64}
        />
        <Image src={'/assets/images/sap-investor.png'} alt="SAP.io Logo" width={152} height={64} />
        <Image
          src={'/assets/images/yunqi-investor.png'}
          alt="YUNQI Partners Logo"
          width={204}
          height={64}
        />
      </div>
    </Section>
  )
}

export default Investors
