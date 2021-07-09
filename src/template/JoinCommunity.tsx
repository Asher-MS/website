import React from 'react'
import { Button } from '../button/Button'

function CommunityImages ({ urlList }: { urlList: string[] }) {
  const communityImages = urlList.map((url, idx) => {
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
          key={`community-img-${idx}`}
          alt={`community-img-${idx}`}
          src={url}
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

  return (
    <div className="flex-1">
      <div className="flex flex-wrap">{communityImages}</div>
    </div>
  )
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

type GitHubStatsProps = {
  stars: number;
  forks: number;
  contributors: number;
};

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const GitHubStats = ({ stars, forks, contributors }: GitHubStatsProps) => (
  <div className="flex justify-between w-96 mb-16">
    <div className="flex flex-col items-center">
      <p className="font-bold text-gray-600">Stars</p>
      <p className="font-bold text-primary-500 text-3xl">{numberWithCommas(stars)}+</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-bold text-gray-600">Forks</p>
      <p className="font-bold text-primary-500 text-3xl">{forks}+</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-bold text-gray-600">Contributors</p>
      <p className="font-bold text-primary-500 text-3xl">{contributors}+</p>
    </div>
  </div>
)

function JoinCommunity () {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  const urlList1 = numberArray.map(
    (_something: any, idx: number) => `/assets/images/community/${idx}.png`
  )
  const urlList2 = numberArray.map(
    (_somthing: any, idx: number) => `/assets/images/community/${idx + 15}.png`
  )

  return (
    <div className="flex">
      <CommunityImages urlList={urlList1} />
      <div className="flex flex-col justify-center items-center m-20">
        <Header
          headerStrings={[
            ['Join Our Growing ', false],
            ['Community', true]
          ]}
        />
        <GitHubStats stars={2230} forks={303} contributors={98} />
        <Button primary className="w-56 py-2">
          Join the community
        </Button>
      </div>
      <CommunityImages urlList={urlList2} />
    </div>
  )
}

export default JoinCommunity
