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

function JoinCommunity () {
  return (
    <Section>
      <div className="flex justify-center">
        <CommunityImages />
        <div>Join our Growing community</div>
        <CommunityImages />
      </div>
    </Section>
  )
}

export default JoinCommunity
