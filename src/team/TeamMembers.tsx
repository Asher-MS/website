import React from 'react'
import { teamMembersList } from '../utils/teamMembersList'
import { TeamMember } from './TeamMember'

export const TeamMembers = () => {
  return (
    <div>
      {teamMembersList.map((teamMember, idx) => (
        <TeamMember teamMember={teamMember} key={idx} />
      ))}
    </div>
  )
}
