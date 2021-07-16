import React from 'react'
import { StarIcon } from '../template/StarIcon'

const DEFAULT_MAX_STARS = 5

type Props = {
  image: {
    name: string;
    tags: string[];
    description: string;
    author: {
      displayName: string;
      avatarURL: string;
    };
    numStars: number;
  };
};

const tagColors = ['primary', 'yellow', 'green', 'red']

const getTagColor = (index: number) => {
  return tagColors[index % tagColors.length]
}

const Tag = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const color = getTagColor(index)
  return (
    <div
      className={`inline-block px-2 py-0 rounded text-${color}-500 bg-${color}-500 background bg-opacity-20 mr-2 mb-2`}
    >
      {children}
    </div>
  )
}

type StarRatingProps = {
  numStars: number;
  maxStars?: number;
};

const StarRating = ({ numStars, maxStars = DEFAULT_MAX_STARS }: StarRatingProps) => {
  const stars = new Array(maxStars).fill(<StarIcon className="m-0.5" />)
  return (
    <div className="-m-0.5">
      <div className="text-gray-300 inline-block relative">
        {stars}
        <div
          className="absolute text-yellow-400 top-0 overflow-hidden whitespace-nowrap"
          style={{ width: `${((numStars / maxStars) * 100).toFixed()}%` }}
        >
          {stars}
        </div>
      </div>
      <div className="inline-block ml-2 text-sm align-bottom">{numStars}</div>
    </div>
  )
}

const Author = ({ author }: { author: Props['image']['author'] }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-1 truncate text-right mr-2 ">{author.displayName}</div>
      <img src={author.avatarURL} className="h-8 rounded-full" />
    </div>
  )
}

export const HubImageCard = ({ image }: Props) => {
  const { name, tags, description, numStars, author } = image
  return (
    <div className="h-full rounded-md bg-white shadow-xl p-6 grid-cols-1 gap-4 flex flex-col">
      <div className="text-lg font-semibold truncate">{name}</div>
      <div>
        {tags.map((tag, idx) => (
          <Tag key={idx} index={idx}>
            {tag}
          </Tag>
        ))}
      </div>
      <div className="hub-image-desc text-gray-600 flex-1">{description}</div>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <StarRating numStars={numStars} />
        </div>
        <div>
          <Author author={author} />
        </div>
      </div>
      <style jsx>
        {`
          .hub-image-desc {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  )
}
