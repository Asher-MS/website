import { useEffect, useState } from 'react'

const COOKIE_STORAGE_KEY = 'jina-cookie-preferences'
const STATUS_ACCEPTED = 'accepted'
const STATUS_DECLINED = 'declined'

type CookiePreferences = {
  status: typeof STATUS_ACCEPTED | typeof STATUS_DECLINED | null;
};

const defaultCookiePreferences: CookiePreferences = {
  status: null
}

export function getCookiePreferenceFromLocalStorage (): CookiePreferences {
  const prefs = localStorage.getItem(COOKIE_STORAGE_KEY)
  return prefs ? JSON.parse(prefs) : defaultCookiePreferences
}

export function setCookiePreferencesInLocalStorage (prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs))
}

export function useCookiePreferences () {
  const [prefs, setPrefs] = useState<CookiePreferences | undefined>()

  useEffect(() => {
    setPrefs(getCookiePreferenceFromLocalStorage())
  }, [])

  function updatePrefs (prefs: Partial<CookiePreferences>) {
    setPrefs((prev) => {
      if (!prev) return prev
      const newPrefs: CookiePreferences = {
        ...prev,
        ...prefs
      }
      setCookiePreferencesInLocalStorage(newPrefs)
      return newPrefs
    })
  }

  function acceptCookies () {
    updatePrefs({ status: STATUS_ACCEPTED })
  }

  function declineCookies () {
    updatePrefs({ status: STATUS_DECLINED })
  }

  return { prefs, acceptCookies, declineCookies }
}
