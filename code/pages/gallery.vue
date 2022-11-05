<script lang="ts" setup>
const projects = [
  {
    name: '隔离食用手册',
    icon: 'i-mdi:pot-steam-outline',
    url: 'https://cook.yunyoujun.cn',
    github: 'YunYouJun/cook'
  },
  {
    name: '便携小空调',
    icon: 'i-mdi:snowflake',
    url: 'https://ac.yunyoujun.cn',
    github: 'YunYouJun/air-conditioner'
  }
]
</script>

<template>
  <div text-5xl>
    TODO: GALLERY
    施工中...

    <ul my-6>
      <li my-4 text-xl v-for="project in projects" :key="project.name">
        <a
          flex justify="center" items-center 
          :href="project.url" :title="project.name" target="_blank"
          hover:text-blue-600
        >
          <div mr-1 inline-flex :class="project.icon" />
          <span>{{ project.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
