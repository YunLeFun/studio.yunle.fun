export interface Link {
  label: string
  url: string
}

export interface Socials {
  blog?: string
  github: string
  bilibili?: string
  weibo?: string
  twitter?: string
  wechat?: string
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
  socials: Socials
  sponsor?: {
    url: string
  }
  reposPersonal?: string[]
}
