import React, { ReactNode } from 'react'
import Icon from '../template/Icon'

import { websiteCopyStrings } from '../utils/websiteCopyStrings'

type IFooterCompanyInfoProps = {
  logo: ReactNode;
  description: string;
};

const FooterCompanyInfo = (props: IFooterCompanyInfoProps) => (
  <div className="text-center md:text-left">
    <div className="flex justify-center md:justify-start">{props.logo}</div>
    <div className="mt-2 text-sm flex mt-6">
      <Icon name="phone" />
      <span className="ml-2">{websiteCopyStrings.footerPhoneNumber}</span>
    </div>
    <div className="mt-2 text-sm flex mt-6">
      <Icon name="location" />
      <span className="ml-2">{websiteCopyStrings.footerAddress}</span>
    </div>
  </div>
)

export { FooterCompanyInfo }
