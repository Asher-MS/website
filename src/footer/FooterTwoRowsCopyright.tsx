import React, { ReactNode } from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

type IFooterTwoRowsCopyrightProps = {
  siteName: string;
  children?: ReactNode;
};

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    {props.children}

    <div className="text-center bg-primary-400 text-gray-100 text-sm mt-12 py-6">
      <span>
        {`© ${new Date().getFullYear()} ${props.siteName}. ${
          websiteCopyStrings.footerCopyrightSufix
        }`}
      </span>
      <span className="mx-4">|</span>
      <a href="/terms-and-policies">
        <span>{websiteCopyStrings.footerTermsOfService}</span>
      </a>
      <span className="mx-4">|</span>
      <a href="/terms-and-policies">
        <span>{websiteCopyStrings.footerPrivacyPolicy}</span>
      </a>
    </div>
  </>
)

export { FooterTwoRowsCopyright }
