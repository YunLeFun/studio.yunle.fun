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
    socials: {
      blog: 'https://www.yunyoujun.cn',
      github: 'YunYouJun',
      bilibili: '1579790',
      weibo: 'jizhideyunyoujun',
      wechat: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
      qq: {
        icon: 'i-ri-qq-fill',
        title: 'QQ交流群 1050458482',
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      },
    },
    sponsor: {
      url: 'https://sponsors.yunyoujun.cn',
    },
  },
]
