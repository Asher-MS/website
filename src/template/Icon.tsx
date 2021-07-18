import React from 'react'
import className from 'classnames'

interface IIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  onClick?: () => void;
}

const Icon = (props: IIconProps) => {
  const iconClasses = className(props.className)
  return (
    <div className={iconClasses} onClick={props.onClick}>
      <img
        src={`/assets/images/icons/${props.name}-icon.svg`}
        alt={`${props.name} icon`}
        className="w-full h-full"
      />
    </div>
  )
}

export default Icon
