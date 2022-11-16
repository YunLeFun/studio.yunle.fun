<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const router = useRouter()
onMounted(() => {
  router.push('/intro')
})
</script>

<template>
  <div>
    <!-- <canvas /> -->
  </div>
</template>
