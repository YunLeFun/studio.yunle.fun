<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  title: appConfig.title,
  link: [
    {
      rel: 'icon', type: 'image/png', href: 'https://www.yunyoujun.cn/favicon.svg',
    },
    {
      rel: 'preconnect', href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&display=swap',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  color: var(--c-text);
  background: var(--c-bg);
  background-attachment: fixed;
  margin: 0;
  padding: 0;

  transition: background 0.8s;
}
</style>
