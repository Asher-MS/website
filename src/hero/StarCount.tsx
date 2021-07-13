import React, { useState, useEffect } from 'react'

const StartCount = () => {
  const [starCount, setStarCount] = useState(0)
  const getFormattedStarCount = (count: number) => `${(count / 1000).toFixed(1)}k+`
  useEffect(() => {
    fetch('https://api.github.com/repos/jina-ai/jina')
      .then((response) => response.json())
      .then((data) => setStarCount(parseInt(data.stargazers_count)))
  }, [])
  return (
    <div className="bg-secondary-300 rounded-md px-5 py-1.5 flex items-center w-32">
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7561 14.8893L4.40169 17.9549L5.61528 11.4619L0.474431 6.86359L7.5789 5.91628L    10.7561 0.00878906L13.9333 5.91628L21.0378 6.86359L15.897 11.4619L17.1106 17.9549L10.7561 14.8893Z"
          fill="#FFC422"
        />
      </svg>
      <span className="ml-4 font-bold">{getFormattedStarCount(starCount)}</span>
    </div>
  )
}

export default StartCount
