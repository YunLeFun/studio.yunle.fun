<script lang="ts" setup>
import { projects } from '~/config'
</script>

<template>
  <div text-5xl>
    <ul grid grid-cols-1 my-4 gap-4 lg:grid-cols-3 md:grid-cols-2>
      <li v-for="project in projects.reverse()" :key="project.name" text-xl>
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>
