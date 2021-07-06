import React from 'react'
import { Section } from '../layout/Section'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function SearchImages () {
  return <div className="bg-gray-500 rounded-xl px-6 py-3"></div>
}

function Demo () {
  const codeString =
    '' +
    'class MyFashionEncoder(Executor) \n' +
    ' ...\n' +
    '.add(uses="jinahub://indexer")\n' +
    '\n' +
    'with f:\n' +
    ' f.index(inputs=[...])\n' +
    ' f.search(inputs=[...])\n' +
    ' ...'

  return (
    <Section>
      <div className="flex bg-red">
        <SyntaxHighlighter className="rounded-xl" language="python" style={shadesOfPurple}>
          {codeString}
        </SyntaxHighlighter>

        <SearchImages />
      </div>
    </Section>
  )
}

export default Demo
