<script lang="ts" setup>
import type { SocialItem } from '~/types'

defineProps<{
  socials: SocialItem[]
}>()
</script>

<template>
  <ul flex gap-5 justify="center">
    <li v-for="(item, i) in socials" :key="i">
      <a text-6 :href="item.link" target="_blank" :title="item.title">
        <div :class="`${item.icon}`" />
      </a>
    </li>
  </ul>
</template>
