import React from 'react'
import { Section } from '../layout/Section'

function CommunityImages () {
  const list = Array.from({ length: 15 }, (_, i) => i + 1)
  const communityImages = list.map((number) => {
    const rndY = Math.random() + 1
    const rndX = Math.random() + 1
    const topOrBottom: boolean = Math.floor(Math.random() + 0.5) === 0
    const rightOrLeft: boolean = Math.floor(Math.random() + 0.5) === 0

    const Y = topOrBottom ? `${rndY}` : `-${rndY}`
    const X = rightOrLeft ? `${rndY}` : `-${rndX}`

    return (
      <>
        <img
          className={'relative CommunityImg'}
          key={`community-img-${number}`}
          alt={`community-img-${number}`}
          src={`/assets/images/community/${number}.png`}
        />
        <style jsx>
          {`
            .CommunityImg {
              top: ${Y}rem;
              right: ${X}rem;
            }
          `}
        </style>
      </>
    )
  })
  return <div className="flex flex-wrap">{communityImages}</div>
}

type HeaderProps = {
  headerStrings: [string, boolean][];
};

const Header = ({ headerStrings }: HeaderProps) => (
  <h2 className="text-center font-bold text-4xl mb-10">
    {headerStrings.map((tuple, index) => (
      <span key={`header-part-${index}`} className={'' + (tuple[1] && 'text-primary-500')}>
        {tuple[0]}
      </span>
    ))}
  </h2>
)

function JoinCommunity () {
  return (
    <Section>
      <div className="flex justify-center">
        <CommunityImages />
        <div>
          <Header
            headerStrings={[
              ['Join Our Growing', false],
              ['Community', true]
            ]}
          />
        </div>
        <CommunityImages />
      </div>
    </Section>
  )
}

export default JoinCommunity
