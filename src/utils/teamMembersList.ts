export interface ITeamMember {
  avatarUrl: string;
  coords: [number, number];
  alt: string;
  about?: string;
  name?: string;
  size?: number;
}

export const teamMembersList: ITeamMember[] = [
  { avatarUrl: '/assets/images/team/1.svg', coords: [3, 8], size: 6, alt: 'Team Member 1' },
  { avatarUrl: '/assets/images/team/2.svg', coords: [12, 25], size: 8, alt: 'Team Member 2' },
  { avatarUrl: '/assets/images/team/3.svg', coords: [18, 10], size: 7, alt: 'Team Member 3' },
  { avatarUrl: '/assets/images/team/4.svg', coords: [27, 4], size: 5, alt: 'Team Member 4' },
  { avatarUrl: '/assets/images/team/5.svg', coords: [27, 22], size: 6, alt: 'Team Member 5' },
  { avatarUrl: '/assets/images/team/6.svg', coords: [22, 35], size: 5, alt: 'Team Member 6' },
  { avatarUrl: '/assets/images/team/7.svg', coords: [33, 51], size: 5, alt: 'Team Member 7' },
  { avatarUrl: '/assets/images/team/8.svg', coords: [26, 61], size: 6, alt: 'Team Member 8' },
  { avatarUrl: '/assets/images/team/9.svg', coords: [31, 88], size: 5, alt: 'Team Member 9' },
  { avatarUrl: '/assets/images/team/10.svg', coords: [40, 6], size: 6, alt: 'Team Member 10' },
  { avatarUrl: '/assets/images/team/11.svg', coords: [54, 0], size: 6, alt: 'Team Member 11' },
  { avatarUrl: '/assets/images/team/12.svg', coords: [47, 40], size: 8, alt: 'Team Member 12' },
  { avatarUrl: '/assets/images/team/13.svg', coords: [61, 8], size: 5, alt: 'Team Member 13' },
  { avatarUrl: '/assets/images/team/14.svg', coords: [59, 22], size: 6.5, alt: 'Team Member 14' },
  { avatarUrl: '/assets/images/team/15.svg', coords: [58, 60], size: 5, alt: 'Team Member 15' },
  { avatarUrl: '/assets/images/team/16.svg', coords: [67, 11], size: 8, alt: 'Team Member 16' },
  { avatarUrl: '/assets/images/team/17.svg', coords: [75, 28], size: 6.6, alt: 'Team Member 17' },
  { avatarUrl: '/assets/images/team/18.svg', coords: [76, 48], size: 5, alt: 'Team Member 18' },
  { avatarUrl: '/assets/images/team/19.svg', coords: [90, 9], size: 5, alt: 'Team Member 19' },
  { avatarUrl: '/assets/images/team/20.svg', coords: [85, 22], size: 5, alt: 'Team Member 20' },
  { avatarUrl: '/assets/images/team/21.svg', coords: [82, 40], size: 7, alt: 'Team Member 21' },
  { avatarUrl: '/assets/images/team/22.svg', coords: [87, 72], size: 6, alt: 'Team Member 22' }
]
