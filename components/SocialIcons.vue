<script lang="ts" setup>
import type { SocialItem } from '~/types'

defineProps<{
  socialList: SocialItem[]
}>()
</script>

<template>
  <div flex gap-5 justify="center">
    <a v-for="(item, i) in socialList" :key="i" :href="item.link" :title="item.title" target="_blank">
      <div :class="item.icon" />
    </a>
  </div>
</template>
