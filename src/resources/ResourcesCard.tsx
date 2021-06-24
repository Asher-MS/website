import React, { ReactNode } from 'react'

type IResourcesCardProps = {
  icon: ReactNode;
  title: string;
  copy: string;
  learnMoreLink: ReactNode;
  buttonColor: string;
  textColor: string;
};

const ResourcesCard = ({
  title,
  copy,
  icon,
  learnMoreLink,
  buttonColor,
  textColor
}: IResourcesCardProps) => (
  <div className="flex flex-col px-6 pt-8 items-center shadow-lg rounded-lg">
    <div className="w-12 h-12">{icon}</div>
    <div className="text-2xl text-gray-900 font-bold">{title}</div>
    <div className="mt-2 text-gray-600 font-normal text-base leading-8">{copy}</div>
    <div
      className="learn-more-button rounded-full text-lg font-bold px-7 py-2 cursor-pointer my-8"
      onClick={() => window.open(learnMoreLink)}
    >
      Learn more
    </div>

    <style jsx>
      {`
        .learn-more-button {
          background-color: ${buttonColor};
          color: ${textColor};
        }
      `}
    </style>
  </div>
)

export { ResourcesCard }
