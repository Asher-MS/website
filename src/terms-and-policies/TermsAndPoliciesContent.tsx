import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const TermsAndPoliciesContent = () => (
  <div className="w-10/12 terms-content pl-32">
    <ul>
      <li id="subtitle-1">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle1}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription1Part1}
        </p>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription1Part2}
        </p>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription1Part3}
        </p>
      </li>
      <li id="subtitle-2" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle2}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription2}
        </p>
      </li>
      <li id="subtitle-3" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle3}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription3}
        </p>
      </li>
      <li id="subtitle-4" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle4}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription4}
        </p>
      </li>
      <li id="subtitle-5" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle5}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription5}
        </p>
      </li>
      <li id="subtitle-6" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle6}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription6}
        </p>
      </li>
      <li id="subtitle-7" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle7}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription7}
        </p>
      </li>
      <li id="subtitle-8" className="mt-10">
        <h4 className="font-bold text-xl text-black">
          {websiteCopyStrings.termsAndPoliciesSubTitle8}
        </h4>
        <p className="text-base font-normal text-gray-600 mt-5">
          {websiteCopyStrings.termsAndPoliciesDescription8}
        </p>
      </li>
    </ul>
    <style jsx>
      {`
        .terms-content {
          border-left: 1px solid rgba(200, 200, 200, 0.35);
        }
      `}
    </style>
  </div>
)

export default TermsAndPoliciesContent
