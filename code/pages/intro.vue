<script lang="ts" setup>
import { intro } from '~/config'
</script>

<template>
  <div text-left px-4>
    <p text="xl" class="border-l-4px border-l-black" pl-2>
      <b>云乐坊工作室</b> 专注互联网营销及游戏领域的 Web 开发，致力于为客户提供快速且优质的 H5 应用开发。
    </p>
    <ul mt-2 list="circle" pl-4>
      <li v-for="(feature, i) in intro.features" :key="i">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
