import React, { ReactNode } from 'react'

type IFooterTwoRowsCopyrightProps = {
  siteName: string;
  children?: ReactNode;
};

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    {props.children}

    <div className="text-center bg-primary-400 text-gray-100 text-sm mt-12 py-6">
      {`© Copyright ${new Date().getFullYear()} ${props.siteName}. All Rights Reserved.`}
    </div>
  </>
)

export { FooterTwoRowsCopyright }
