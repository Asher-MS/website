import React from 'react'
import { Section } from '../layout/Section'
import { TeamMapBackground } from '../team/TeamMapBackground'
import { TeamMembers } from '../team/TeamMembers'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'

const MeetOurTeam = () => {
  return (
    <Section>
      <div className="text-center font-bold text-4xl mb-20">
        <h2 className="text-black">
          <span>{websiteCopyStrings.careersMeetOurTeamSectionHeadingPart1}</span>
          &nbsp;
          <span className="text-primary-500">
            {websiteCopyStrings.careersMeetOurTeamSectionHeadingPart2}
          </span>
        </h2>
      </div>
      <div className="w-full relative">
        <TeamMapBackground />
        <TeamMembers />
      </div>
    </Section>
  )
}

export default MeetOurTeam
