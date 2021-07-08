import React from 'react'
import className from 'classnames'

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface IButtonProps extends DivProps {
  xl?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  full?: boolean;
  fullRounded?: boolean;
}

const Button = (props: IButtonProps) => {
  const btnClass = className('btn cursor-pointer', props.className, {
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
    'btn-tertiary': props.tertiary,
    'btn-full-rounded': !props.fullRounded,
    'w-full': props.full
  })

  return (
    <div className={btnClass} onClick={props.onClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply text-center;
          }

          .btn-base {
            @apply text-lg font-semibold;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-full-rounded {
            @apply rounded-full;
          }

          .btn-primary {
            @apply text-white bg-primary-600 rounded-full;
          }

          .btn-primary:hover {
            background-color: #009191;
          }

          .btn-secondary {
            @apply bg-secondary-500 text-black;
          }

          .btn-secondary:hover {
            background-color: #fbd076;
          }

          .btn-tertiary {
            @apply bg-white;
            border: 1px solid #999999;
          }

          .btn-tertiary:hover {
            background-color: #f6f6f6;
          }
        `}
      </style>
    </div>
  )
}

export { Button }
