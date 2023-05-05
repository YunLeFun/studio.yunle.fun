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

    <a mt-2 text-base href="mailto:i@yunle.fun" target="_blank">
      广告位招租~
    </a>
  </footer>
</template>
