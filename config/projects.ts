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
    url: 'https://yu.yunyoujun.cn',
    bilibili: 'https://www.bilibili.com/blackboard/activity-wnOj1Wog37.html#/',
    github: 'YunYouJun/your-university',
  },
  {
    name: '今天买什么',
    desc: '双十一攻略手册',
    icon: 'i-ri-shopping-bag-line',
    url: 'https://app.yunle.fun/single-day-strategy/',
    github: 'YunLeFun/single-day-strategy',
  },
  {
    name: '测一测你的老板是什么类型',
    desc: 'B站联合复旦大学管理学院设计｜领导风格测试工具',
    icon: 'https://app.yunle.fun/bilibili-boss-quiz/logo.jpg',
    url: 'https://app.yunle.fun/bilibili-boss-quiz/',
    bilibili: 'https://www.bilibili.com/blackboard/activity-TxFVVESPn1.html?bsource=yunlefun',
  },
  {
    name: '我的塞尔达本命武器',
    desc: '用 AI 创造武器',
    icon: 'i-ri-robot-line',
    // icon: 'https://app.yunle.fun/bilibili-boss-quiz/logo.jpg',
    url: 'https://zelda-weapons.yunle.fun',
    bilibili: 'https://www.bilibili.com/blackboard/activity-gkKsCvz81a.html?bsource=yunlefun',
  },
]
