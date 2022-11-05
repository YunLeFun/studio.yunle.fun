<script lang="ts" setup>
import { Socials } from '~/types';

defineProps<{
  socials: Socials
}>()
</script>

<template>
  <div flex gap-5 justify="center">
    <a v-if="socials.github" :href="'https://github.com/' + socials.github" title="GitHub" target="_blank">
      <div i-ri-github-fill />
    </a>
    <a v-if="socials.bilibili" :href="'https://space.bilibili.com/' + socials.bilibili" title="哔哩哔哩" target="_blank">
      <div i-ri-bilibili-fill />
    </a>
    <a v-if="socials.github" :href="'https://weibo.com/' + socials.weibo" title="微博" target="_blank">
      <div i-ri-weibo-fill />
    </a>
    <a v-if="socials.wechat" :href="socials.wechat" title="微信公众号" target="_blank">
      <div i-ri-wechat-fill />
    </a>
  </div>
</template>
