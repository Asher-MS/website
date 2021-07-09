import React from 'react'

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
      <div className="flex-none">
        <Header
          headerStrings={[
            ['Join Our Growing ', false],
            ['Community', true]
          ]}
        />
      </div>
      <CommunityImages urlList={urlList2} />
    </div>
  )
}

export default JoinCommunity
