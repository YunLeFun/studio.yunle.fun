<script lang="ts" setup>
interface SocialItem {
  icon: string
  title: string
  link: string
}

const socialList: SocialItem[] = [
  {
    icon: 'i-ri-mail-fill',
    title: 'bd@yunle.fun｜商务合作',
    link: 'mailto:bd@yunle.fun',
  },
  {
    icon: 'i-ri-github-fill',
    title: 'YunLeFun',
    link: 'https://github.com/YunLeFun',
  },
  {
    icon: 'i-ri-wechat-fill',
    title: '云乐坊工作室｜微信公众号',
    link: '/images/yunlefun-wechat.jpg',
  },
  {
    icon: 'i-ri-bilibili-fill',
    title: '云乐坊工作室｜哔哩哔哩',
    link: 'https://space.bilibili.com/165596026',
  },
  {
    icon: 'i-ri-weibo-fill',
    title: '云乐坊工作室',
    link: 'https://weibo.com/yunlefun',
  },
  {
    icon: 'i-ri-twitter-fill',
    title: 'YunLeFun | Twitter',
    link: 'https://twitter.com/YunLeFun',
  },
]
</script>

<template>
  <div flex text="white" gap-5>
    <a v-for="(item, i) in socialList" :key="i" :href="item.link" :title="item.title" target="_blank">
      <div :class="item.icon" />
    </a>
  </div>
</template>
