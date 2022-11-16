import type { Project } from '~/types'

export const projects: Project[] = [
  {
    name: '隔离食用手册',
    desc: '好的，今天我们来做菜',
    icon: 'i-mdi:pot-steam-outline',
    url: 'https://cook.yunyoujun.cn',
    github: 'YunYouJun/cook',
  },
  {
    name: '便携小空调',
    desc: '为你的夏日带去清凉！',
    icon: 'i-mdi:snowflake',
    url: 'https://ac.yunyoujun.cn',
    github: 'YunYouJun/air-conditioner',
  },
  {
    name: '高考志愿填报锦囊',
    desc: '你的大学',
    icon: 'i-ri-ancient-gate-line',
    // url: 'https://yu.yunyoujun.cn',
    url: 'https://www.bilibili.com/blackboard/activity-wnOj1Wog37.html#/',
    github: 'YunYouJun/your-university',
  },
  {
    name: '今天买什么',
    desc: '双十一攻略手册',
    icon: 'i-ri-shopping-bag-line',
    url: 'https://app.yunle.fun/single-day-strategy/',
    github: 'YunLeFun/single-day-strategy',
  },
]
