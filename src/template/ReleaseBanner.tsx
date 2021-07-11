import React, { useState } from 'react'

import { Button } from '../button/Button'
import { GITHUB_LINK, websiteCopyStrings } from '../utils/websiteCopyStrings'

const ReleaseBanner = () => {
  const [showBanner, setShowBanner] = useState(true)

  return showBanner
    ? (
    <div className="release-banner">
      <span className="font-medium text-black ml-auto">
        {websiteCopyStrings.heroReleaseBannerText}
      </span>
      <a href={GITHUB_LINK}>
        <Button secondary className="inline-block px-10 py-1.5 ml-6">
          {websiteCopyStrings.heroReleaseBannerButtonLabel}
        </Button>
      </a>
      <div className="inline-block ml-auto mr-6" onClick={() => setShowBanner(false)}>
        <svg height={16} width={16}>
          <line x1={0} y1={0} x2={16} y2={16} style={{ stroke: '#000', strokeWidth: 1 }} />
          <line x1={0} y1={16} x2={16} y2={0} style={{ stroke: '#000', strokeWidth: 1 }} />
        </svg>
      </div>
      <style jsx>
        {`
          .release-banner {
            @apply w-full py-5 absolute;
            @apply bg-secondary-300;
            @apply flex justify-center items-center;
            top: 5.5rem;
            z-index: 120;
          }
        `}
      </style>
    </div>
      )
    : (
    <></>
      )
}

export default ReleaseBanner
