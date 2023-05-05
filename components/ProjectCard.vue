<script lang="ts" setup>
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <a
    :href="project.url" target="_blank"
    class="bg-left-to-right border-8px border-$c-border"
    flex flex-col justify="center" p-4 hover="text-$c-bg" cursor="pointer"
    min-h="35"
  >
    <div m-auto w="8" h="8" mb-2 class="flex-center">
      <div v-if="isCssIcon(project.icon)" text-2xl :class="project.icon" />
      <img v-else :src="project.icon" class="rounded">
    </div>
    <h3
      class="ylf-font-serif"
      flex justify="center" items-center
      font="black"
      :href="project.url" :title="project.name" target="_blank"
    >
      <span>{{ project.name }}</span>
    </h3>
    <div text="sm" mt-2 opacity="80">
      {{ project.desc }}
    </div>
  </a>
</template>
