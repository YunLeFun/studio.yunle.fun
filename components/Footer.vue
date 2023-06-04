<script setup lang="ts">
import { socialList } from '~/config'

const icp = '京ICP备2022027075号-1'
</script>

<template>
  <footer
    class="footer"

    text="xl gray4"

    flex flex-col items-start justify-start bg-black p-8
  >
    <SocialIcons text="white" :social-list="socialList" />

    <div class="mt-5 text-center text-lg opacity-90" font-black text-white>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        {{ icp }}
      </a>
    </div>

    <a mt-2 text-base href="mailto:i@yunle.fun" target="_blank">
      广告位招租~
    </a>
  </footer>
</template>
