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
    <div className={'flex flex-col items-center ' + (copy && 'cursor-pointer')}>
      <img
        className={'border-2 ' + (selected && 'border-primary-500 rounded-xl')}
        alt={name}
        src={`/assets/images/demo-${name}.png`}
      />
      {copy && <p className={'' + (selected && 'text-primary-500')}>{copy}</p>}
    </div>
  )
}

function SearchImages () {
  type SelectionItem = 'shoe' | 'dress' | 'hat';
  const [selectedItem, setSelectedItem] = useState<SelectionItem>('shoe')
  return (
    <div className="bg-gray-100 rounded-xl px-6 py-3">
      <p>{websiteCopyStrings.demoSearchImagesHeader}</p>
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
  return (
    <Section>
      <div className="flex bg-red">
        <SyntaxHighlighter className="rounded-xl" language="python" style={shadesOfPurple}>
          {websiteCopyStrings.demoCodeExample}
        </SyntaxHighlighter>

        <SearchImages />
      </div>
    </Section>
  )
}

export default Demo
