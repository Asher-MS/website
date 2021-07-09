import React, { useState } from 'react'

import { Button } from '../button/Button'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const ReleaseBanner = () => {
  const [showBanner, setShowBanner] = useState(true)

  return showBanner
    ? (
    <div className="release-banner">
      <span>{websiteCopyStrings.heroReleaseBannerText}</span>
      <Button className="inline-block">{websiteCopyStrings.heroReleaseBannerButtonLabel}</Button>
      <div className="inline-block text-right" onClick={() => setShowBanner(false)}>
        <svg height={10} width={10}>
          <line x1={0} y1={0} x2={10} y2={10} style={{ stroke: '#000', strokeWidth: 1 }} />
          <line x1={0} y1={10} x2={10} y2={0} style={{ stroke: '#000', strokeWidth: 1 }} />
        </svg>
      </div>
      <style jsx>
        {`
          .release-banner {
            @apply w-full absolute top-24;
            @apply bg-secondary-300;
            @apply text-center;
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
