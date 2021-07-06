import React from 'react'
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
    <div className="flex flex-col items-center">
      <img alt={name} src={`/assets/images/demo-${name}.png`} />
      {copy && <p className={'' + (selected && 'text-primary-500')}>copy</p>}
    </div>
  )
}

function SearchImages () {
  return (
    <div className="bg-gray-100 rounded-xl px-6 py-3">
      <p>{websiteCopyStrings.demoSearchImagesHeader}</p>
      <div className="flex">
        <ImageCard name={'shoe-1'} />
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
