<script lang="ts" setup>
import { partners } from '~/config'
</script>

<template>
  <div my-2>
    <h3 font="serif black" text="xl" mb-4>
      合作伙伴
    </h3>
    <ul flex justify="center">
      <li v-for="partner in partners" :key="partner.name" m-2 class="inline-flex drop-shadow hover:drop-shadow-md">
        <a :href="partner.url" target="_blank" :title="partner.name">
          <img class="h-16" :src="partner.logo" :alt="partner.name">
        </a>
      </li>
    </ul>
    <div mt-4 text="sm" opacity="60">
      ……
    </div>
  </div>
</template>
