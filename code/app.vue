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
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: var(--ylf-c-bg);
  color: white;
}
</style>
