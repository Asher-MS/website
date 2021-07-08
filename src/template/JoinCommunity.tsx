import React, { ReactNode } from 'react'
import { Section } from '../layout/Section'

type CommunityImagesProps = {
  imageList: ReactNode[];
};

function CommunityImages ({ imageList }: CommunityImagesProps) {
  const list = Array.from({ length: 10 }, (_, i) => i + 1)
  const communityImages = list.map((number) => {
    return (
      <img
        key={`community-img-${number}`}
        alt={`community-img-${number}`}
        src={`/assets/images/community/${number}.png`}
      />
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
