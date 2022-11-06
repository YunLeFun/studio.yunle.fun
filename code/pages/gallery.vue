<script lang="ts" setup>
import type { Project } from '~/types'

const projects: Project[] = [
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
    github: 'YunYouJun/your-university',
  },
]
</script>

<template>
  <div text-5xl>
    施工中...

    <ul my-6 grid grid-cols-1 md:grid-cols-3 gap-4>
      <li v-for="project in projects" :key="project.name" text-xl>
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>
