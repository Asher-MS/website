import React, { useState } from 'react'
import { Section } from '../layout/Section'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

type ImageCardProps = {
  name: string;
  copy?: string;
  selected?: boolean;
};

const ImageCard = ({ name, copy, selected }: ImageCardProps) => {
  return (
    <div className={'flex flex-col items-center mr-3' + (copy && 'cursor-pointer')}>
      <img
        className={'border-2 ' + (selected && 'border-primary-500 rounded-xl')}
        alt={name}
        src={`/assets/images/demo-${name}.png`}
      />
      {copy && (
        <p className={'font-bold text-gray-500 ' + (selected && 'text-primary-500')}>{copy}</p>
      )}
    </div>
  )
}

function SearchImages () {
  type SelectionItem = 'shoe' | 'dress' | 'hat';
  const [selectedItem, setSelectedItem] = useState<SelectionItem>('shoe')
  return (
    <div className="bg-gray-100 rounded-xl px-12 py-6">
      <p className="mb-3 text-gray-600 text-lg">{websiteCopyStrings.demoSearchImagesHeader}</p>
      <div className="flex">
        <div onClick={() => setSelectedItem('shoe')}>
          <ImageCard
            name={'shoe-selected'}
            selected={selectedItem === 'shoe'}
            copy={websiteCopyStrings.demoSearchImagesShoesCopy}
          />
        </div>
        <div onClick={() => setSelectedItem('dress')}>
          <ImageCard
            name={'dress-selected'}
            selected={selectedItem === 'dress'}
            copy={websiteCopyStrings.demoSearchImagesDressCopy}
          />
        </div>
        <div onClick={() => setSelectedItem('hat')}>
          <ImageCard
            name={'hat-selected'}
            selected={selectedItem === 'hat'}
            copy={websiteCopyStrings.demoSearchImagesHatCopy}
          />
        </div>
      </div>

      <div className="flex">
        <ImageCard name={`${selectedItem}-0`} />
        <ImageCard name={`${selectedItem}-1`} />
        <ImageCard name={`${selectedItem}-2`} />
        <ImageCard name={`${selectedItem}-3`} />
      </div>
    </div>
  )
}

function Demo () {
  const customBackground = {
    backgroundColor: '#3F3D56'
  }
  const customStyles = {
    ...customBackground,
    padding: '2rem'
  }
  const lineNumberStyle = {
    color: '#FFFFFF66'
  }
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          {websiteCopyStrings.demoHeaderPart1}
          <span className="text-primary-500"> {websiteCopyStrings.demoHeaderPart2}</span>
          {websiteCopyStrings.demoHeaderPart3}
        </h2>
      </div>
      <div className="flex justify-center">
        <div>
          <div className="rounded-t-xl mr-6" style={customBackground}>
            title
          </div>
          <SyntaxHighlighter
            showLineNumbers
            className="rounded-b-xl mr-6 flex-grow"
            language="python"
            style={shadesOfPurple}
            customStyle={customStyles}
            lineNumberStyle={lineNumberStyle}
          >
            {websiteCopyStrings.demoCodeExample}
          </SyntaxHighlighter>
        </div>

        <SearchImages />
      </div>
    </Section>
  )
}

export default Demo
