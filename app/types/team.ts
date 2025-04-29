export interface Link {
  label: string
  url: string
}

export interface SocialItem {
  icon: string
  title: string
  link: string
}

export interface Member {
  /**
   * 代表色
   */
  color?: string
  name: string
  desc: string
  avatarPic?: string
  title: string
  projects: Link[]
  location: string
  website?: Link
  socials: SocialItem[]
  sponsor?: {
    url: string
  }
  reposPersonal?: string[]
}
