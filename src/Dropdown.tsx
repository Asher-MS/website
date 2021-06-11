import React from 'react'
import { DivProps } from './button/Button'
import Icon from './template/Icon'

type DropdownItems = {
  title: string;
  description?: string;
  icon?: string;
  link?: string;
};
interface DropdownProps extends DivProps {
  dropDownLabel: string;
  dropDownItems: DropdownItems[];
}

const Dropdown = ({ dropDownLabel, dropDownItems }: DropdownProps) => {
  return (
    <div className="group inline-block relative">
      <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1 font-bold">{dropDownLabel}</span>
        <svg
          className="fill-current h-4 w-4 mt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="dropdown">
        {dropDownItems.map((item) => (
          <li className="m-0" key={item.title}>
            <a
              className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href={item.link ? item.link : '#'}
            >
              <div>
                <div className="flex">
                  {item.icon && <Icon name={item.icon} />}
                  <span className="text-gray-800 font-semibold text-sm ml-2">{item.title}</span>
                </div>
                {item.description && (
                  <span className="text-xs text-gray-500">{item.description}</span>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <style jsx>
        {`
          .dropdown {
            @apply absolute hidden text-gray-700 p-10 group-hover:block bg-white;
            @apply rounded-xl w-96 top-20;
            @apply divide-solid divide-gray-200 divide-y;
            box-shadow: 3px 6px 33px rgba(205, 205, 205, 0.25);
          }
        `}
      </style>
    </div>
  )
}

export default Dropdown
