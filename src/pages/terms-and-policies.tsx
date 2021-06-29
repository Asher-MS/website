import React from 'react'

import Meta from '../layout/Meta'
import PageWithHeaderAndFooter from '../layout/PageWithHeaderAndFooter'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import TermsAndPoliciesContent from '../terms-and-policies/TermsAndPoliciesContent'
import TermsAndPoliciesSidebar from '../terms-and-policies/TermsAndPoliciesSidebar'

const TermsAndPolicies = () => (
  <>
    <Meta
      title="Jina AI | Jina AI is a Neural Search Company"
      description="Open source neural search ecosystem for businesses and developers, allowing anyone to search any kind of data with high availability and scalability."
      canonical="https://jina.ai/"
    />
    <PageWithHeaderAndFooter>
      <Section>
        <div className="flex pt-16 pb-40">
          <div className="w-2/12"></div>
          <div className="w-10/12">
            <h2 className="text-center font-bold text-5xl">
              {websiteCopyStrings.termsAndPoliciesTitle}
            </h2>
            <p className="text-center text-gray-600">
              {websiteCopyStrings.termsAndPoliciesUpdateDate}
            </p>
          </div>
        </div>
        <div className="flex">
          <TermsAndPoliciesSidebar />
          <TermsAndPoliciesContent />
        </div>
      </Section>
    </PageWithHeaderAndFooter>
  </>
)

export default TermsAndPolicies
