import React, { useState } from 'react'
import { DivProps } from '../button/Button'

interface CollapsibleElementProps extends DivProps {
  title: string;
  content: string;
  chevronPosition?: 'right' | 'left';
}

const CollapsibleElement = ({ title, content, chevronPosition }: CollapsibleElementProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title flex ${
          chevronPosition === 'right' && 'flex-row-reverse justify-between'
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <div
            className={`bg-primary-400 bg-opacity-40 text-primary-500 rounded-full p-1 m-5 transform ${
              isActive ? 'rotate-90' : '-rotate-90'
            }`}
          >
            <Chevron />
          </div>
        </div>
        <div className="">
          <div className="my-5 font-medium text-lg">{title}</div>
          <div className={`accordion-content text-base text-gray-600 ${!isActive && 'h-0 hidden'}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollapsibleElement

const Chevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-left"
    viewBox="0 0 16 16"
  >
    <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
  </svg>
)
