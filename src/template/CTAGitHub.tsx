import React from 'react'

import { Button } from '../button/Button'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import Icon from './Icon'

const CTAGitHub = () => {
  return (
    <div className="relative py-20">
      <div className="w-3/6 mx-auto">
        <div className="w-5/6k">
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
            <Icon name="GitHub-black" className="w-10 h-10" />
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
