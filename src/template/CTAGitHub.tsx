import React from 'react'

import { Button } from '../button/Button'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import CTAGitHubBackground from './CTAGitHubBackground'
import Icon from './Icon'

const CTAGitHub = () => {
  return (
    <div className="relative py-20 bg-gray-100">
      <div className="w-3/6 mx-auto">
        <CTAGitHubBackground />
        <div className="w-5/6">
          <h2>{websiteCopyStrings.HomeCallToActionTitle}</h2>
          <p className="text-base text-gray-600 my-3">
            {websiteCopyStrings.HomeCallToActionDescription}
          </p>
          <Button
            fullRounded
            tertiary
            className="rounded-full flex items-center justify-center w-48"
          >
            <span className="mr-6 font-bold">{websiteCopyStrings.HomeCallToActionButtonLabel}</span>
            <Icon name="GitHub-black" className="w-8 h-8" />
          </Button>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 2.5rem;
            line-height: 130%;
            text-transform: capitalize;
            color: #171918;
          }
        `}
      </style>
    </div>
  )
}

export default CTAGitHub
