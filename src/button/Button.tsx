import React from 'react'

import className from 'classnames'

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface IButtonProps extends DivProps {
  xl?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  full?: boolean;
  fullRounded?: boolean;
}

const Button = (props: IButtonProps) => {
  const btnClass = className('btn', props.className, {
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
    'btn-tertiary': props.tertiary,
    'btn-full-rounded': !props.fullRounded,
    'w-full': props.full
  })

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply text-center;
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

          .btn-tertiary {
            @apply bg-white;
            border: 1px solid #999999;
          }

          .btn-tertiary:hover {
            @apply bg-gray-200;
          }
        `}
      </style>
    </div>
  )
}

export { Button }
