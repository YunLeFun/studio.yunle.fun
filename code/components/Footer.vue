<script setup lang="ts">
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
    fixed
    bottom-0
    left-0
    right-0
  >
    <SocialIcons />

    <div class="mt-5 text-center opacity-90 text-lg" text-white font-black>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        {{ icp }}
      </a>
    </div>
  </footer>

</template>
