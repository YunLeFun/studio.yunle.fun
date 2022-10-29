<script setup lang="ts">
const icp = '京ICP备2022027075号-1'
</script>

<template>
  <div
    text="xl gray4"
    m-5
    flex
    justify-center
    gap-3
  >
    <a i-ri-github-line href="https://github.com/YunLeFun" title="YunLeFun" target="_blank" />
    <a i-ri-bilibili-line href="https://space.bilibili.com/165596026" title="云乐坊工作室" target="_blank" />
    <a i-ri-wechat-line href="/images/yunlefun-wechat.jpg" title="云乐坊工作室" target="_blank" />
  </div>
  <div class="mt-5 mx-auto text-center opacity-60 text-sm">
    <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
      {{ icp }}
    </a>
  </div>
</template>
