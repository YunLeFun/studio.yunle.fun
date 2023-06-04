<script lang="ts" setup>
import { partners } from '~/config'
</script>

<template>
  <div my-2>
    <h3 class="ylf-font-serif" font="black" text="2xl" mb-4>
      合作伙伴
    </h3>
    <ul flex justify="center">
      <li
        v-for="partner in partners" :key="partner.name" m-2
        class="inline-flex drop-shadow transition hover:drop-shadow-md"
      >
        <a :href="partner.url" target="_blank" :title="partner.name">
          <img class="h-16" :src="partner.logo" :alt="partner.name">
        </a>
      </li>
    </ul>
    <div my-4 text="sm" opacity="60">
      ……
    </div>
    <NuxtLink class="ylf-font-serif text-lg underline" font="black" opacity="60" to="/contact">
      联系我们
    </NuxtLink>
  </div>
</template>
