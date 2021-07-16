import React from 'react'
import classNames from 'classnames'

export const StarIcon = ({ className }: { className: string }) => {
  const iconClasses = classNames(className, 'fill-current', 'inline-block')
  return (
    <svg
      className={iconClasses}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 14.25L4.12215 17.1857L5.24472 10.9678L0.489435 6.56434L7.06107 5.65717L10 0L12.9389 5.65717L19.5106 6.56434L14.7553 10.9678L15.8779 17.1857L10 14.25Z" />
    </svg>
  )
}