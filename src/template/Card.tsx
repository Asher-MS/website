import React, { ReactNode } from 'react'

type CardProps = {
  img: ReactNode;
  headerString: string;
  copy: string;
  footer: ReactNode;
};

const Card = ({ img, headerString, copy, footer }: CardProps) => (
  <div className="rounded-xl w-96 m-2 shadow cursor-pointer">
    {img}
    <div className="px-6 pt-8 pb-4 flex flex-col h-72">
      <h3 className="text-xl font-bold mb-6">{headerString}</h3>
      <p className="flex-1">{copy}</p>
      {footer}
    </div>
  </div>
)

export default Card
