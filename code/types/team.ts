export interface Link {
  label: string
  url: string
}

export interface Socials {
  github: string
  bilibili?: string
  weibo?: string
  twitter?: string
  wechat?: string
}

export interface Member {
  name: string
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
