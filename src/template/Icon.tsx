import React from 'react'
import className from 'classnames'

interface IIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

const Icon = (props: IIconProps) => {
  const iconClasses = className(props.className)
  return (
    <div className={iconClasses}>
      <img src={`/assets/images/${props.name}-icon.svg`} alt={`${props.name} icon`} />
    </div>
  )
}

export default Icon
