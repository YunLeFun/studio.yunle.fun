<script lang="ts" setup>
import { intro } from '~/config'
</script>

<template>
  <div text-left>
    <div text="xl" class="border-l-8px border-l-$c-border" pl-3>
      <b font="serif black">云乐坊工作室</b> 是一个希望创作有趣/有用/有回响之物的小小工作坊。
      <br>
      目前专注互联网应用、营销及游戏领域的 Web 开发，致力于为客户提供快速且<b>优质</b>的 H5 应用及创意实现过程。

      <ul mt-2 list="circle" pl-4>
        <li v-for="(feature, i) in intro.features" :key="i">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="ylf-font-serif" text="xl bold" mt-4>
      <span>期待与您合作创作更多有趣的产品，让世界变得更加</span>
      <span font="bold" class="ylf-font-serif bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-600 to-green-600">有趣多彩</span>。
      <NuxtLink class="underline" to="/contact">
        联系我们
      </NuxtLink>
    </div>
  </div>
</template>
