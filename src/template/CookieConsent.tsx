import React from 'react'
import { Button } from '../button/Button'
import { useCookiePreferences } from '../utils/cookies'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

export const CookieConsent = () => {
  const { prefs, acceptCookies, declineCookies } = useCookiePreferences()
  if (!prefs || prefs.status !== null) return null
  return (
    <div className="cookies-container">
      {websiteCopyStrings.cookieConsentText}
      <div className="text-right pt-6">
        <Button
          fullRounded
          className="rounded-full w-48 p-2 inline-block bg-white"
          onClick={declineCookies}
        >
          Decline
        </Button>{' '}
        <Button
          fullRounded
          secondary
          className="rounded-full w-48 p-2 mt-2 inline-block"
          onClick={acceptCookies}
        >
          Accept
        </Button>
      </div>
      <style jsx>
        {`
          .cookies-container {
            @apply fixed rounded-lg right-0 bottom-0 m-5 bg-whitesmoke-500 shadow-xl p-8 max-w-2xl;
            z-index: 101;
          }
        `}
      </style>
    </div>
  )
}
