import React from 'react'
import { ITeamMember } from '../utils/teamMembersList'

type Props = {
  teamMember: ITeamMember;
};

const DEFAULT_SIZE = 5

export const TeamMember = ({ teamMember }: Props) => {
  const size = teamMember.size || DEFAULT_SIZE
  const { avatarUrl, coords } = teamMember
  return (
    <div>
      <img
        src={avatarUrl}
        className="absolute rounded-full shadow-lg cursor-pointer transition duration-200 hover:transform hover:scale-150 hover:shadow-xl hover:z-10"
        style={{ width: `${size}%`, left: `${coords[0]}%`, top: `${coords[1]}%` }}
      />
    </div>
  )
}
