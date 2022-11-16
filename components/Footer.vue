<script setup lang="ts">
import { socialList } from '~/config'

const icp = '京ICP备2022027075号-1'
</script>

<template>
  <footer
    class="footer"
    bg-black
    text="xl gray4"
    p-8
    flex
    flex-col
    justify-start
    items-start
  >
    <SocialIcons text="white" :social-list="socialList" />

    <div class="mt-5 text-center opacity-90 text-lg" text-white font-black>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        {{ icp }}
      </a>
    </div>

    <div mt-2 text-base>
      由 <a href="https://www.netdun.net/" class="text-gray-300" target="_blank">网盾星球</a> 提供 CDN 支持
    </div>
  </footer>
</template>
