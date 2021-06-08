import React from 'react'

type ICustomerLogoProps = {
  src: string;
  alt: string;
};

const CustomerLogo = (props: ICustomerLogoProps) => (
  <img
    className="opacity-10"
    src={`${process.env.baseUrl}${props.src}`}
    alt={props.alt}
  />
)

export { CustomerLogo }
