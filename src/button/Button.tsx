import React from 'react'
import className from 'classnames'

interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  xl?: boolean;
  secondary?: boolean;
  full?: boolean;
  fullRounded?: boolean;
}

const Button = (props: IButtonProps) => {
  const btnClass = className('btn', props.className, {
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-secondary': props.secondary,
    'btn-primary': !props.secondary,
    'btn-full-rounded': !props.fullRounded,
    'w-full': props.full
  })

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-full-rounded {
            @apply rounded-full;
          }

          .btn-primary {
            @apply text-white bg-primary-500 rounded-full;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }

          .btn-secondary {
            @apply bg-gray-300;
          }

          .btn-secondary:hover {
            @apply bg-gray-400;
          }
        `}
      </style>
    </div>
  )
}

export { Button }
