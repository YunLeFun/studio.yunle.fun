import type { Member } from '~/types'

export const members: Member[] = [
  {
    name: '云游君',
    title: 'Founder',
    desc: '开源爱好者',
    projects: [],
    location: 'China',
    website: {
      label: '云游君的小站',
      url: 'https://www.yunyoujun.cn',
    },
    socials: [
      {
        link: 'https://www.yunyoujun.cn',
        title: '博客',
        icon: 'i-ri-global-fill',
      },
      {
        link: 'https://github.com/YunYouJun',
        title: 'GitHub',
        icon: 'i-ri-github-fill',
      },
      {
        link: 'https://space.bilibili.com/1579790',
        title: '哔哩哔哩',
        icon: 'i-ri-bilibili-fill',
      },
      {
        link: 'https://weibo.com/jizhideyunyoujun',
        title: '微博',
        icon: 'i-ri-weibo-fill',
      },
      {
        link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
        title: '微信',
        icon: 'i-ri-wechat-fill',
      },
      {
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
        title: 'QQ交流群 1050458482',
        icon: 'i-ri-qq-fill',
      },
    ],
    sponsor: {
      url: 'https://sponsors.yunyoujun.cn',
    },
  },
]
