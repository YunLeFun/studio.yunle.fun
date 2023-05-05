<script lang="ts" setup>
import { projects } from '~/config'
</script>

<template>
  <div text-5xl>
    <ul my-4 grid grid-cols-1 md:grid-cols-3 gap-4>
      <li v-for="project in projects.reverse()" :key="project.name" text-xl>
        <ProjectCard :project="project" />
      </li>
    </ul>

    <div my-4>
      施工中...
    </div>
  </div>
</template>
