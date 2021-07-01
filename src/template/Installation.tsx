import React, { useState } from 'react'
import { Section } from '../layout/Section'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

export const Installation = () => {
  const [selectedOption, setSelectedOption] = useState(
    websiteCopyStrings.coreInstallationToggleButtonPython
  )
  const handleToggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(
      e.target.checked
        ? websiteCopyStrings.coreInstallationToggleButtonDocker
        : websiteCopyStrings.coreInstallationToggleButtonPython
    )
  }
  return (
    <Section>
      <h2 className="text-center font-bold text-4xl">
        <span className="">{websiteCopyStrings.coreInstallationTitlePart1}</span>
        &nbsp;
        <span className="text-primary-500">{websiteCopyStrings.coreInstallationTitlePart2}</span>
      </h2>
      <div className="mt-16 mb-8">
        <input type="checkbox" id="toggle-switch" onChange={handleToggleSwitch} />
        <label className="button bg-gray-100 relative mx-auto rounded-lg" htmlFor="toggle-switch">
          <div className="knob flex items-center justify-center bg-primary-500 rounded-lg text-xl">
            {selectedOption}
          </div>
          <div className="python absolute text-primary-500 text-xl font-semibold">
            {websiteCopyStrings.coreInstallationToggleButtonPython}
          </div>
          <div className="docker absolute text-primary-500 text-xl font-semibold">
            {websiteCopyStrings.coreInstallationToggleButtonDocker}
          </div>
        </label>
      </div>
      <div className="mx-auto code-container rounded-lg text-white py-2 px-4 mb-8">
        {selectedOption === websiteCopyStrings.coreInstallationToggleButtonPython
          ? websiteCopyStrings.coreInstallationCommandPython
          : websiteCopyStrings.coreInstallationCommandDocker}
      </div>
      <p className="text-center">{websiteCopyStrings.coreInstallationDescription}</p>
      <style jsx>
        {`
          input[type='checkbox'] {
            display: none;
          }
          .button {
            display: block;
            width: 14rem;
            height: 4rem;
            cursor: pointer;
            box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.198761);
          }
          .knob {
            width: 6em;
            height: 3rem;
            position: relative;
            top: 0.5rem;
            left: 0.5rem;
            transition: 0.4s ease left, 0.4s ease background-position;
            z-index: 2;
          }
          .python,
          .docker {
            top: 50%;
            transform: translateY(-50%);
            margin-left: 1rem;
            z-index: 1;
          }
          .docker {
            margin-left: 9rem;
          }
          .code-container {
            background: #3f3d56;
            width: 32rem;
          }
          #toggle-switch:checked + .button .knob {
            left: 6rem;
          }
        `}
      </style>
    </Section>
  )
}

export default Installation
