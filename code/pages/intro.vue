<script lang="ts" setup>
import { intro } from '~/config'
</script>

<template>
  <div text-left>
    <div text="xl" class="border-l-8px border-l-black" pl-3>
      <b>云乐坊工作室</b> 是一个希望创作有趣事物的小小工作坊。
      <br>
      目前专注互联网营销及游戏领域的 Web 开发，致力于为客户提供快速且优质的 H5 应用开发。

      <ul mt-2 list="circle" pl-4>
        <li v-for="(feature, i) in intro.features" :key="i">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div text="lg" mt-2>
      <span>期待与您合作创作更多有趣的产品，让世界变得更加</span>
      <span text-blue-600>有</span>
      <span text-green-600>趣</span>
      <span text-red-600>多</span>
      <span text-orange-600>彩</span>。
      <RouterLink class="underline" to="/contact">
        联系我们
      </RouterLink>
    </div>
  </div>
</template>
