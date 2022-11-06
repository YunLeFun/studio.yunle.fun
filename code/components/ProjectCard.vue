<script lang="ts" setup>
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <a :href="project.url" target="_blank" class="bg-left-to-right border-4px border-c-border" flex flex-col justify="center" p-4 hover="text-c-bg" cursor="pointer">
    <div m-auto text-2xl mb-2 inline-flex :class="project.icon" />
    <h3
      flex justify="center" items-center
      :href="project.url" :title="project.name" target="_blank"
    >
      <span>{{ project.name }}</span>
    </h3>
    <div text="sm" mt-2 opacity="80">
      {{ project.desc }}
    </div>
  </a>
</template>
