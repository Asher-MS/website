import React from 'react'

const CTAGitHubBackground = () => {
  return (
    <div className="">
      <div className="absolute yellow-circle"></div>
      <div className="absolute green-circle"></div>
      <div className="absolute green-triangle"></div>
      <div className="absolute red-semi-circle"></div>
      <style jsx>
        {`
          .yellow-circle {
            @apply rounded-full w-20 h-20 bg-yellow-300;
            top: 50%;
            left: 10%;
          }
          .green-circle {
            @apply rounded-full w-7 h-7 bg-primary-700;
            top: 40%;
            left: 18%;
          }
          .green-triangle {
            @apply h-36 w-36 bg-primary-700;
            border-radius: 5rem 0 0 50%;
            top: -4.5rem;
            right: 1rem;
            clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
            transform: rotate(-45deg);
            border-radius: 0 0 0 2em;
          }
          .red-semi-circle {
            @apply w-28 h-14 bg-red-500;
            border-radius: 9rem 9rem 0 0;
            bottom: 0;
            right: 20%;
          }
        `}
      </style>
    </div>
  )
}

export default CTAGitHubBackground
